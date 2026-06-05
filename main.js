/* Applied AI Agent — Shared JS */

// ── GLOBAL FUNCTIONS ──

function closeMobileMenu() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (btn) btn.classList.remove('open');
    if (menu) menu.classList.remove('open');
    document.body.style.overflow = '';
}

function openModal() {
    closeMobileMenu();
    const m = document.getElementById('demoModal');
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal() {
    const m = document.getElementById('demoModal');
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}

async function submitModal() {
    const f = document.getElementById('modalForm');
    const s = document.getElementById('modalSuccess');
    const btn = f ? f.querySelector('.btn-submit') : null;
    if (!f || !s) return;
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    const data = new FormData(f);
    try {
        const res = await fetch('https://formspree.io/f/xldblwpn', {
            method: 'POST', body: data, headers: { 'Accept': 'application/json' }
        });
        if (res.ok || res.status === 0) { f.style.display = 'none'; s.style.display = 'block'; }
        else { if (btn) { btn.disabled = false; btn.textContent = 'Schedule My Free Demo'; } }
    } catch (_) {
        f.style.display = 'none'; s.style.display = 'block';
    }
}

async function submitContactForm() {
    const f = document.getElementById('contactForm');
    const s = document.getElementById('contactSuccess');
    const btn = f ? f.querySelector('.btn-submit') : null;
    if (!f || !s) return;
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    const data = new FormData(f);
    try {
        const res = await fetch('https://formspree.io/f/xldblwpn', {
            method: 'POST', body: data, headers: { 'Accept': 'application/json' }
        });
        if (res.ok || res.status === 0) { f.style.display = 'none'; s.style.display = 'block'; }
        else { if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; } }
    } catch (_) {
        f.style.display = 'none'; s.style.display = 'block';
    }
}

// ── INIT ──

document.addEventListener('DOMContentLoaded', function () {

    // NAV SCROLL BEHAVIOR
    const nav = document.getElementById('nav');
    const hero = document.querySelector('.hero');
    if (nav) {
        function updateNav() {
            if (!hero) {
                nav.classList.remove('over-dark');
                nav.classList.add('over-light');
                return;
            }
            const overHero = hero.getBoundingClientRect().bottom > 80;
            nav.classList.toggle('over-dark', overHero);
            nav.classList.toggle('over-light', !overHero);
        }
        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav();
    }

    // HAMBURGER
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
    }

    // ESC TO CLOSE MODAL
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // FLOATING DEMO BUTTON
    const floatBtn = document.getElementById('floatBtn');
    if (floatBtn && hero) {
        new IntersectionObserver(([entry]) => {
            floatBtn.classList.toggle('visible', !entry.isIntersecting);
        }, { threshold: 0 }).observe(hero);
    }

    // FADE-IN OBSERVER — threshold 0 so even 1px triggers it
    const fadeObs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('on'), i * 80);
                fadeObs.unobserve(e.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade, .project').forEach(el => fadeObs.observe(el));

    // STAGGERED ROW REVEAL — threshold 0 + failsafe timeout
    const cards = document.querySelectorAll('.auto-card, .vertical-row');
    if (cards.length) {
        const cardObs = new IntersectionObserver((entries) => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('on'), i * 80);
                    cardObs.unobserve(e.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });
        cards.forEach(el => cardObs.observe(el));

        // Failsafe: force all visible after 3 seconds
        setTimeout(() => {
            document.querySelectorAll('.auto-card, .vertical-row, .fade').forEach(el => el.classList.add('on'));
        }, 3000);
    }

    // STATS COUNT-UP
    const statEls = document.querySelectorAll('[data-count]');
    if (statEls.length) {
        function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
        function animateCount(el) {
            const target = +el.dataset.count;
            const suffix = el.dataset.suffix || '';
            const duration = 1500;
            const start = performance.now();
            function tick(now) {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(easeOut(p) * target) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }
        const statObs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { animateCount(e.target); statObs.unobserve(e.target); }
            });
        }, { threshold: 0.3 });
        statEls.forEach(el => statObs.observe(el));
    }

    // FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (!btn || !answer) return;
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // close all
            faqItems.forEach(i => {
                i.classList.remove('open');
                const a = i.querySelector('.faq-answer');
                if (a) a.style.maxHeight = '0';
            });
            // open clicked if it was closed
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

});
