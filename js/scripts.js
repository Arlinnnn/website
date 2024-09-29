document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Seleccionamos todos los elementos que tendrán la animación
const animElements = document.querySelectorAll('.anim');

// Creamos el observador de intersección
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agregamos la clase cuando el elemento está visible
            observer.unobserve(entry.target); // Dejamos de observar una vez que el elemento ha aparecido
        }
    });
}, {
    threshold: 0.1 // Disparar cuando el 10% del elemento es visible
});
// Aplicamos el observador a cada elemento
animElements.forEach(element => {
    observer.observe(element);
});
//
document.getElementById('hamburger').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
});