// Per resettare lo scroll ogni volta che ricarico la pagina [[
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});
// ]]

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    /* Movimento del glow dello sfondo
     *
     */
    const glow = document.querySelector('.hero-glow');
    document.addEventListener('mousemove', (e) => {
        if (!glow) return;
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        glow.style.left = `${20 + x * 0.2}%`;
        glow.style.top = `${30 + y * 0.2}%`;
    });

// Scomparsa della freccia in fondo alla sezione HERO [[
const scrollArrow = document.querySelector('.scroll-arrow');
const bioSection = document.getElementById('bio');
    // quando arrivo a metà tra Hero e Bio scompare
window.addEventListener('scroll', () => {
    const halfway = bioSection.offsetTop / 2;
    scrollArrow.classList.toggle('hidden', window.scrollY > halfway);
});
// ]]