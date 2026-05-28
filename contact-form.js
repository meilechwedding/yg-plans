/* yg plans — contact form (FormSubmit.co AJAX → tuli@ygplans.com)
   First submission triggers a one-time activation email to Tuli;
   after he clicks the confirmation link, all future submissions deliver. */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const submit = document.getElementById('contactSubmit');
  const success = document.getElementById('formSuccess');

  const requireFields = [
    { name: 'name',     label: 'Please enter your name.' },
    { name: 'phone',    label: 'Please enter a phone number.' },
    { name: 'project_type', label: 'Please choose a project type.' },
    { name: 'location', label: 'Please enter the project location.' },
    { name: 'message',  label: 'Tell us a bit about the project.' },
  ];

  function fieldOf(input) { return input ? input.closest('.cf-field') : null; }

  function clearErrors() {
    form.querySelectorAll('.cf-field').forEach(f => f.classList.remove('invalid'));
    // remove any injected error notes
    form.querySelectorAll('.cf-err').forEach(e => e.remove());
  }

  function setError(name, msg) {
    const input = form.querySelector('[name="' + name + '"]');
    const field = fieldOf(input);
    if (!field) return;
    field.classList.add('invalid');
    let err = field.querySelector('.cf-err');
    if (!err) {
      err = document.createElement('span');
      err.className = 'cf-err is-shown';
      field.appendChild(err);
    }
    err.textContent = msg;
  }

  function validate() {
    clearErrors();
    let ok = true;
    for (const f of requireFields) {
      const input = form.querySelector('[name="' + f.name + '"]');
      if (!input) continue;
      const val = (input.value || '').trim();
      if (!val) { setError(f.name, f.label); ok = false; continue; }
      if (f.name === 'phone' && val.replace(/\D/g, '').length < 10) {
        setError('phone', 'Looks off — please double-check.'); ok = false;
      }
    }
    // Email is optional, but if provided must be valid
    const emailInput = form.querySelector('[name="email"]');
    if (emailInput) {
      const val = (emailInput.value || '').trim();
      if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setError('email', 'Please enter a valid email.'); ok = false;
      }
    }
    return ok;
  }

  // Phone auto-format: 1234567890 → 123-456-7890
  const phoneInput = form.querySelector('[name="phone"]');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      let digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      let out = digits;
      if (digits.length > 6) out = digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
      else if (digits.length > 3) out = digits.slice(0, 3) + '-' + digits.slice(3);
      phoneInput.value = out;
    });
  }

  // Clear field error as the user types
  form.querySelectorAll('.cf-field input, .cf-field textarea, .cf-field select').forEach(el => {
    el.addEventListener('input', () => {
      const field = fieldOf(el);
      if (field) {
        field.classList.remove('invalid');
        const err = field.querySelector('.cf-err');
        if (err) err.remove();
      }
    });
  });

  const submitLabel = submit ? submit.querySelector('span:first-child') : null;
  const setSubmit = (text, opts = {}) => {
    if (submitLabel) submitLabel.textContent = text;
    if (submit) {
      submit.disabled = !!opts.disabled;
      submit.classList.toggle('is-loading', !!opts.loading);
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (status) { status.textContent = ''; status.classList.remove('error'); }
    if (!validate()) {
      if (status) {
        status.textContent = 'Please check the highlighted fields.';
        status.classList.add('error');
      }
      return;
    }
    setSubmit('Sending…', { loading: true, disabled: true });
    if (status) status.textContent = 'Sending…';

    const fd = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' },
      });
      const json = await res.json().catch(() => ({}));
      const ok = res.ok && (json.success === true || json.success === 'true' || /success/i.test(json.message || ''));
      if (ok) {
        setSubmit('Sent ✓', { disabled: true });
        form.classList.add('is-submitted');
        if (status) status.textContent = '';
        setTimeout(() => {
          form.hidden = true;
          if (success) {
            success.hidden = false;
            requestAnimationFrame(() => success.classList.add('in'));
          }
        }, 500);
      } else {
        throw new Error((json && json.message) || ('HTTP ' + res.status));
      }
    } catch (err) {
      if (status) {
        status.textContent = 'Something went wrong. Please call us directly at 845-263-6855.';
        status.classList.add('error');
      }
      setSubmit('Try again', { disabled: false });
    }
  });
})();
