(() => {
  'use strict';
  const menu = document.getElementById('menu-button');
  const nav = document.getElementById('main-nav');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const records = [...document.querySelectorAll('.record')];
  const status = document.getElementById('filter-status');
  const progress = document.getElementById('reading-progress');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    menu.querySelector('.menu-text').textContent = 'Menu';
    menu.querySelector('.menu-symbol').textContent = '☰';
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    menu.querySelector('.menu-text').textContent = open ? 'Close' : 'Menu';
    menu.querySelector('.menu-symbol').textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menu.focus(); }
  });
  document.addEventListener('pointerdown', e => {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu();
  });
  function chooseFilter(selected) {
    let visible = 0;
    records.forEach(record => {
      const show = selected === 'all' || record.dataset.category === selected;
      record.hidden = !show;
      if (show) visible += 1;
    });
    filters.forEach(button => {
      const active = button.dataset.filter === selected;
      button.classList.toggle('is-selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const text = selected === 'all' ? 'Showing all four records.' : selected === 'legal' ? 'Showing one legal administration record.' : `Showing ${visible} service and operations records.`;
    status.textContent = text;
  }
  filters.forEach(button => button.addEventListener('click', () => chooseFilter(button.dataset.filter)));

  let scheduled = false;
  function updateReadingTrack() {
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const fraction = Math.min(1, Math.max(0, window.scrollY / total));
    progress.style.transform = `scaleX(${fraction})`;
    scheduled = false;
  }
  function onScroll() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateReadingTrack); }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll, { passive:true });
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
  if (reducedMotion.matches) document.documentElement.classList.add('no-motion');
  reducedMotion.addEventListener('change', e => document.documentElement.classList.toggle('no-motion', e.matches));
  updateReadingTrack();
})();