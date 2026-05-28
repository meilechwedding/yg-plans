/* yg plans — homepage interactions
   IntersectionObserver reveals · hero word cascade · work pills + gallery · testimonial rotator */

(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ───── Smooth scroll for in-page anchors ─────
  if (!reduceMotion) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - 40;
          window.scrollTo({ top: y });
        }
      }
    });
  });

  // ───── Nav scrolled state + reveal after hero ─────
  const nav = $('#nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
    nav.classList.toggle('revealed', window.scrollY > window.innerHeight * 0.62);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // ───── Hero reveal — word-by-word cascade ─────
  function kickHeroIn() {
    $$('.hero-line').forEach(el => el.classList.add('in'));
    $$('#heroHeadline .word').forEach((w, i) => {
      w.style.transitionDelay = (i * 80) + 'ms';
      w.classList.add('in');
    });
  }
  setTimeout(kickHeroIn, 60);

  // ───── Page-wide noise overlay ─────
  if (!document.querySelector('.bg-noise')) {
    const noise = document.createElement('div');
    noise.className = 'bg-noise';
    noise.setAttribute('aria-hidden', 'true');
    document.body.appendChild(noise);
  }

  // (scroll-progress thread removed — felt too web-y for an architecture studio)

  // ───── Generic fade-up reveals ─────
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  $$('.fade-up').forEach(el => io.observe(el));

  // ───── Hero divider line ─────
  const heroDivider = $('#heroDivider');
  if (heroDivider) {
    const hdIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          heroDivider.classList.add('in');
          hdIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    hdIO.observe(heroDivider);
  }

  // ───── Philosophy strip — bracket hairlines draw in ─────
  const philoSection = $('#philosophy');
  if (philoSection) {
    const phIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          philoSection.classList.add('in');
          phIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    phIO.observe(philoSection);
  }

  // ───── Studio steps — sequential reveal (0/120/240/360ms) ─────
  const studioSteps = $('#studioSteps');
  if (studioSteps) {
    const steps = $$('.studio-step', studioSteps);
    const ssIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          steps.forEach((s, i) => {
            setTimeout(() => s.classList.add('in'), i * 120);
          });
          ssIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    ssIO.observe(studioSteps);
  }

  // ───── WORK — pill filter + horizontal gallery (auto-scroll, drag, arrows) ─────
  const gallery = $('#projectGallery');
  const track = $('#galleryTrack');
  const pills = $$('.pill');
  const galleryPrev = $('#galleryPrev');
  const galleryNext = $('#galleryNext');

  if (gallery && track) {
    const tiles = $$('.g-tile', track);

    // Filter
    let currentCat = 'all';
    const applyFilter = (cat) => {
      currentCat = cat;
      tiles.forEach(t => {
        const cats = (t.dataset.cat || '').split(/\s+/);
        const show = cat === 'all' || cats.includes(cat);
        t.classList.toggle('is-hidden', !show);
      });
      // Reset scroll to start when filter changes
      track.scrollTo({ left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    pills.forEach(p => {
      p.addEventListener('click', () => {
        pills.forEach(o => {
          o.classList.toggle('is-active', o === p);
          o.setAttribute('aria-selected', o === p ? 'true' : 'false');
        });
        applyFilter(p.dataset.cat);
      });
    });

    // Auto-scroll (slow, constant; pause on hover, resume off-hover)
    let autoScrollPaused = false;
    let lastFrame = performance.now();
    const PX_PER_SEC = 28; // ~one tile-width (~400px+16gap) every ~15s; gentle
    function tick(now) {
      const dt = (now - lastFrame) / 1000;
      lastFrame = now;
      if (!autoScrollPaused && !isUserInteracting() && document.visibilityState === 'visible') {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll > 4) {
          let next = track.scrollLeft + PX_PER_SEC * dt;
          if (next >= maxScroll - 1) next = 0;
          track.scrollLeft = next;
        }
      }
      requestAnimationFrame(tick);
    }
    if (!reduceMotion) requestAnimationFrame(tick);

    gallery.addEventListener('mouseenter', () => { autoScrollPaused = true; });
    gallery.addEventListener('mouseleave', () => { autoScrollPaused = false; });
    gallery.addEventListener('focusin', () => { autoScrollPaused = true; });
    gallery.addEventListener('focusout', () => { autoScrollPaused = false; });

    // Drag-to-scroll
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let didDrag = false;
    function isUserInteracting() { return isDragging; }

    track.addEventListener('pointerdown', (e) => {
      isDragging = true;
      didDrag = false;
      dragStartX = e.clientX;
      dragStartScroll = track.scrollLeft;
      track.classList.add('dragging');
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 4) didDrag = true;
      track.scrollLeft = dragStartScroll - dx;
    });
    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('dragging');
      try { track.releasePointerCapture(e.pointerId); } catch (_) {}
    };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    // Suppress click after a drag
    track.addEventListener('click', (e) => {
      if (didDrag) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Arrows
    const scrollByTile = (dir) => {
      const visible = tiles.find(t => !t.classList.contains('is-hidden'));
      const step = visible ? (visible.getBoundingClientRect().width + 16) : 416;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    if (galleryPrev) galleryPrev.addEventListener('click', () => scrollByTile(-1));
    if (galleryNext) galleryNext.addEventListener('click', () => scrollByTile(1));

    // Default filter
    applyFilter('all');
  }

  // ───── TESTIMONIALS — auto-rotating crossfade, pause on hover, dot nav ─────
  const tRotator = $('#testimonialRotator');
  if (tRotator) {
    const slides = $$('.t-slide', tRotator);
    const dots = $$('.t-dot', tRotator);
    let idx = 0;
    let timer = null;
    const DUR = 7000;

    function show(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    }
    function start() {
      stop();
      if (reduceMotion) return;
      timer = setInterval(() => show(idx + 1), DUR);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    dots.forEach(d => {
      d.addEventListener('click', () => {
        show(parseInt(d.dataset.i, 10) || 0);
        start();
      });
    });
    tRotator.addEventListener('mouseenter', stop);
    tRotator.addEventListener('mouseleave', start);
    tRotator.addEventListener('focusin', stop);
    tRotator.addEventListener('focusout', start);

    // Begin only when in view (don't burn cycles off-screen)
    const trIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { start(); }
        else { stop(); }
      });
    }, { threshold: 0.2 });
    trIO.observe(tRotator);

    show(0);
  }

  // ───── Mobile hamburger menu ─────
  const burger = $('#navBurger');
  const mobileMenu = $('#mobileMenu');
  const menuClose = $('#mobileMenuClose');
  if (burger && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    };
    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };
    burger.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    $$('.mobile-menu-links a, .mobile-menu-cta', mobileMenu).forEach(a => {
      a.addEventListener('click', () => setTimeout(closeMenu, 50));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }
})();

/* ───── REFINEMENT PASS — hero parallax + interactive service ribbon ───── */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Hero image parallax: fixed layer, fade 0.40 → 0 as content scrolls over ──
  const atmos = document.getElementById('heroAtmos');
  if (atmos) {
    let ticking = false;
    const update = () => {
      const span = Math.max(1, window.innerHeight * 0.82);
      const p = Math.min(1, Math.max(0, window.scrollY / span));
      atmos.style.opacity = String(1 - p);
      atmos.style.transform = 'translateY(' + (p * -36).toFixed(1) + 'px)';
      atmos.style.visibility = p >= 1 ? 'hidden' : 'visible';
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  // ── Service ribbon: continuous ticker (CSS) + click opens service popup ──
  const ribbon = document.getElementById('heroRibbon');
  const modal = document.getElementById('svcModal');
  if (ribbon && modal) {
    const COPY = {
      custom: { title: 'Custom homes',            body: 'We do custom homes. Let us help you make your vision come true.' },
      reno:   { title: 'Renovations & additions', body: 'We do renovations and additions. Let us help you make your vision come true.' },
      semi:   { title: 'Semi-attached',           body: 'We do semi-attached homes. Let us help you make your vision come true.' },
      multi:  { title: 'Multifamily',             body: 'We do multifamily buildings. Let us help you make your vision come true.' },
      shul:   { title: 'Shuls & mosdos',          body: 'We do shuls and mosdos. Let us help you make your vision come true.' },
      site:   { title: 'Site plans',              body: 'We do site plans. Let us help you make your vision come true.' },
    };
    const mTitle = document.getElementById('svcModalTitle');
    const mBody = document.getElementById('svcModalBody');
    const mWork = document.getElementById('svcModalWork');
    const card = modal.querySelector('.svc-modal-card');
    let lastFocus = null;
    let activeCat = 'all';
    let autoTimer = null;

    const positionCard = (trigger) => {
      if (!trigger) return;
      const r = trigger.getBoundingClientRect();
      // measure card, place it just above the clicked item, clamped to viewport
      const cw = card.offsetWidth || 300;
      const ch = card.offsetHeight || 220;
      const pad = 12;
      let left = r.left + r.width / 2 - cw / 2;
      left = Math.max(pad, Math.min(left, window.innerWidth - cw - pad));
      let top = r.top - ch - 14;            // prefer above the item
      if (top < pad) top = r.bottom + 14;   // not enough room -> below
      top = Math.min(top, window.innerHeight - ch - pad);
      card.style.left = Math.round(left) + 'px';
      card.style.top = Math.round(top) + 'px';
    };

    const openModal = (cat, trigger) => {
      const c = COPY[cat]; if (!c) return;
      activeCat = cat;
      lastFocus = trigger || null;
      mTitle.textContent = c.title;
      mBody.textContent = c.body;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      positionCard(trigger);                // place before reveal so it animates in place
      requestAnimationFrame(() => {
        positionCard(trigger);              // re-measure now that content is set
        modal.classList.add('in');
      });
      const closeBtn = modal.querySelector('.svc-modal-close');
      if (closeBtn) closeBtn.focus();
      // auto-dismiss after 20s
      if (autoTimer) clearTimeout(autoTimer);
      autoTimer = setTimeout(closeModal, 20000);
    };
    const closeModal = () => {
      if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
      if (!modal.classList.contains('open')) return;
      modal.classList.remove('in');
      modal.classList.add('out');
      setTimeout(() => {
        modal.classList.remove('open', 'out');
        modal.setAttribute('aria-hidden', 'true');
      }, 200);
    };

    ribbon.querySelectorAll('.ribbon-item').forEach(item => {
      item.addEventListener('click', () => openModal(item.dataset.cat, item));
    });

    // "See the work →" — filter to category, scroll to work, close
    if (mWork) {
      mWork.addEventListener('click', (e) => {
        e.preventDefault();
        const pill = document.querySelector('.pill[data-cat="' + activeCat + '"]');
        if (pill) pill.click();
        closeModal();
        const work = document.getElementById('work');
        if (work) {
          const y = work.getBoundingClientRect().top + window.scrollY - 40;
          setTimeout(() => window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' }), 60);
        }
      });
    }

    modal.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', () => closeModal());
    });
    // click anywhere outside the popover card closes it
    document.addEventListener('click', (e) => {
      if (!modal.classList.contains('open')) return;
      if (card.contains(e.target)) return;
      if (e.target.closest && e.target.closest('.ribbon-item')) return; // the click that opened it
      closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }
})();
