/* ===========================================
   main.js — Mie Ongklok Instan
   =========================================== */

const NAV_H = 62;

/* ===== 1. NAVBAR SHADOW SAAT SCROLL ===== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });


/* ===== 2. HAMBURGER MOBILE ===== */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Tutup menu saat salah satu link diklik
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});


/* ===== 3. ACTIVE NAV SAAT SCROLL ===== */
const sectionIds  = ['flavor-profile', 'cooking-guide', 'nutritional-info', 'our-story'];
const navAnchors  = document.querySelectorAll('.nav-center a[data-target]');

function updateActive() {
  let current = sectionIds[0];

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - NAV_H - 30) {
      current = id;
    }
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.dataset.target === current);
  });
}

window.addEventListener('scroll', updateActive, { passive: true });
updateActive(); // jalankan sekali saat halaman pertama load


/* ===== 4. SMOOTH SCROLL DENGAN OFFSET NAVBAR ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id     = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - NAV_H;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});


/* ===== 5. REVEAL ANIMASI SAAT SCROLL ===== */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});
