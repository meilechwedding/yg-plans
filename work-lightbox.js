/* yg plan — work archive lightbox */
(function () {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const img = document.getElementById('lbImage');
  const loc = document.getElementById('lbLoc');
  const name = document.getElementById('lbName');
  const desc = document.getElementById('lbDesc');
  const stats = document.getElementById('lbStats');

  function open(btn) {
    const d = btn.dataset;
    img.src = d.projectImage || '';
    img.alt = d.projectName || '';
    loc.textContent = d.projectLocation || '';
    name.textContent = d.projectName || '';
    desc.textContent = d.projectDescription || '';
    stats.innerHTML = '';
    [
      ['Type', d.projectType],
      ['Size', d.projectSize],
      ['Year', d.projectYear],
      ['Status', d.projectStatus],
    ].forEach(([k, v]) => {
      if (!v) return;
      const s = document.createElement('div');
      s.className = 'stat';
      s.innerHTML = '<span class="k">' + k + '</span><span class="v">' + v + '</span>';
      stats.appendChild(s);
    });
    lb.hidden = false;
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');
    requestAnimationFrame(() => lb.classList.add('in'));
  }

  function close() {
    lb.classList.remove('in');
    setTimeout(() => {
      lb.hidden = true;
      lb.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lb-open');
    }, 400);
  }

  document.querySelectorAll('.proj[data-project-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      open(btn);
    });
  });

  lb.addEventListener('click', (e) => {
    if (e.target.closest('[data-lb-close]')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lb.hidden) close();
  });
})();
