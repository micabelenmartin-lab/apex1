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

/* ==========================================
APEX — NEXT LEVEL EXPERIENCE
PEGAR AL FINAL DE script.js
========================================== */

/* ── PREMIUM SCROLL REVEAL ── */

const premiumReveal = document.querySelectorAll(
'.prog-card,.tech-item,.pipeline-box,.sim-cinema,.sim-mini,.exp-circuit'
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(
[
{
opacity:0,
transform:'translateY(80px) scale(.98)'
},
{
opacity:1,
transform:'translateY(0) scale(1)'
}
],
{
duration:1200,
easing:'cubic-bezier(.18,.9,.18,1)',
fill:'forwards'
}
);

revealObserver.unobserve(entry.target);

}

});

},{
threshold:.18
});

premiumReveal.forEach(el=>{
el.style.opacity='0';
revealObserver.observe(el);
});


/* ── NAV DEPTH ── */

window.addEventListener('scroll',()=>{

const nav=document.querySelector('nav');

if(!nav) return;

if(window.scrollY>40){

nav.style.background='rgba(5,5,5,.82)';
nav.style.backdropFilter='blur(34px)';
nav.style.borderBottom='1px solid rgba(255,255,255,.08)';

}else{

nav.style.background='';
nav.style.backdropFilter='';
nav.style.borderBottom='';

}

},{passive:true});


/* ── HERO PARALLAX ── */

const hero=document.querySelector('#hero');

window.addEventListener('scroll',()=>{

if(!hero)return;

hero.style.transform=
`translateY(${window.scrollY*.04}px)`;

},{passive:true});


/* ── LIGHT FOLLOW ── */

document.addEventListener('mousemove',(e)=>{

document.body.style.background=
`
radial-gradient(
circle at
${e.clientX}px
${e.clientY}px,

rgba(0,255,136,.025),

transparent 520px
)
`;

});


/* ── PREMIUM CARD HOVER ── */

document
.querySelectorAll(
'.prog-card,.tech-item'
)
.forEach(card=>{

card.addEventListener(
'mouseenter',
()=>{

card.style.transition=
'all .6s ease';

card.style.transform=
'translateY(-10px)';

}
);

card.addEventListener(
'mouseleave',
()=>{

card.style.transform='';

}
);

});


/* ── SCROLL PROGRESS SMOOTH ── */

const bar=
document.getElementById(
'scroll-bar'
);

if(bar){

window.addEventListener(
'scroll',
()=>{

const p=
window.scrollY/
(
document.body.scrollHeight-
window.innerHeight
);

bar.style.transform=
`scaleX(${p})`;

},
{
passive:true
}
);

}

console.log(
'APEX NEXT LEVEL ACTIVE'
);
