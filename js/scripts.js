function scrollToGallery() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

// document.getElementById('nextBtn').addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % totalSlides;
//     slides[currentSlide].classList.add('active');
// });

// document.getElementById('prevBtn').addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     slides[currentSlide].classList.add('active');
// });

// // Smooth Scroll

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// // Efecto de escritura para el texto del hero
// const typedText = document.querySelector('.hero h1');
// const text = "Bienvenido a mi portafolio";
// let index = 0;

// function typeEffect() {
//     if (index < text.length) {
//         typedText.innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeEffect, 100);
//     }
// }

// Iniciar el efecto cuando la página haya cargado
// window.onload = typeEffect;

//navegacion

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//scroll
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




