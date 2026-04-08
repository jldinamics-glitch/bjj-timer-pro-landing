// Mostrar mensaje al hacer clic en botones (por ahora solo simulación)
document.getElementById('btn-android').addEventListener('click', function(e) {
    e.preventDefault();
    alert('📱 La app estará disponible en Google Play pronto. ¡Síguenos para más novedades!');
});

document.getElementById('btn-ios').addEventListener('click', function(e) {
    e.preventDefault();
    alert('🍎 Versión iOS próximamente. ¡Mantente atento!');
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.benefit-card, .step, .achievement-card, .prize-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});