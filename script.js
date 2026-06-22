/* ═══════════════════════════════════════════
   APEX SIM RACING — script.js
   Modificaciones: Cursor simplificado y limpieza de elementos eliminados
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR (Versión Simple) ── */
  const cursor = document.getElementById('cursor');
  
  // Actualización inmediata de la posición del cursor
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  // Ocultar cursor al salir de la ventana
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  /* ── PARTICLE CANVAS ── */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // ... (El resto de tu lógica de partículas permanece igual)
  }

  /* ── TECH ITEM SCAN LINE ON HOVER ── */
  document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = 'inset 0 0 0 1px rgba(0,255,136,.06)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = '';
    });
  });

  /* ── CTA TITLE CHAR SCRAMBLE ── */
  function scramble(el, finalText, duration = 800) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
    const len = finalText.length;
    let frame = 0;
    const totalFrames = Math.ceil(duration / 32);

    const interval = setInterval(() => {
      let out = '';
      for (let i = 0; i < len; i++) {
        if (frame / totalFrames > i / len) {
          out += finalText[i];
        } else {
          out += finalText[i] === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
        }
      }
      el.textContent = out;
      frame++;
      if (frame >= totalFrames) {
        el.textContent = finalText;
        clearInterval(interval);
      }
    }, 32);
  }

  const ctaTitle = document.querySelector('.cta-main-text');
  if (ctaTitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scramble(ctaTitle, 'EL TIEMPO');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(ctaTitle);
  }

});
