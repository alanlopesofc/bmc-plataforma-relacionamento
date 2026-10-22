(() => {
  const deck = document.querySelector('#deck');
  const slides = [...document.querySelectorAll('.slide')];
  const dots = document.querySelector('.progress__dots');
  const count = document.querySelector('#current-slide');
  const total = document.querySelector('#total-slides');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0;

  total.textContent = String(slides.length).padStart(2, '0');
  slides.forEach((slide, index) => {
    const eyebrow = slide.querySelector('.eyebrow');
    if (eyebrow && /^\d{2} /.test(eyebrow.textContent)) {
      eyebrow.textContent = eyebrow.textContent.replace(/^\d{2}/, String(index + 1).padStart(2, '0'));
    }
  });
  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.className = 'progress__dot';
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `${String(index + 1).padStart(2, '0')} · ${slide.dataset.label}`);
    dot.addEventListener('click', () => goTo(index));
    dots.appendChild(dot);
  });
  const dotEls = [...dots.children];

  function update(index) {
    active = index;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dotEls.forEach((dot, i) => dot.setAttribute('aria-selected', i === index ? 'true' : 'false'));
    count.textContent = String(index + 1).padStart(2, '0');
  }

  function goTo(index, animate = true) {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    slides[next].scrollIntoView({ behavior: reduced || !animate ? 'auto' : 'smooth', block: 'start' });
    update(next);
  }

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) update(slides.indexOf(entry.target));
    }),
    { root: deck, threshold: [0.6] }
  );
  slides.forEach(slide => observer.observe(slide));

  document.addEventListener('keydown', event => {
    if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault();
      goTo(active + 1);
    }
    if (['ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      goTo(active - 1);
    }
    if (event.key === 'Home') { event.preventDefault(); goTo(0); }
    if (event.key === 'End') { event.preventDefault(); goTo(slides.length - 1); }
  });

  update(0);
})();
