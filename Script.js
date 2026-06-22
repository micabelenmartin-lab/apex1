/* ═══════════════════════════════════════════
   APEX SIM RACING — main.js
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* TELEMETRY LIVE VALUES */
  const rpmEl = document.getElementById('tel-rpm');
  const speedEl = document.getElementById('hero-speed');

  const flicker = (el, min, max, suffix, interval) => {
    if (!el) return;
    const update = () => {
      const v = min + Math.floor(Math.random() * (max - min));
      el.textContent = v.toLocaleString() + suffix;
      setTimeout(update, interval + Math.random() * interval * .8);
    };
    update();
  };

  flicker(rpmEl, 9800, 11200, '', 350);
  flicker(speedEl, 248, 298, ' km/h', 550);

  /* SCROLL PROGRESS BAR */
  const bar = document.getElementById('scroll-bar');
  if (bar) {
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = pct + '%';
    }, { passive: true });
  }
});
