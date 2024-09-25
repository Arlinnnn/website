const carouselImages = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const imageCount = carouselImages.length;
let autoSlideInterval;

// Función para mostrar la imagen en el índice actual
function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Función para cambiar a la imagen siguiente
function nextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    showImage(currentIndex);
}

// Función para cambiar a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    showImage(currentIndex);
}

// Configuración del intervalo automático para cambiar de imagen cada 20 segundos
function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 20000); // 20 segundos
}

// Detener el cambio automático de imagen cuando se hace clic en un botón
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Asignar eventos a los botones de navegación
nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
});

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
});

// Iniciar el carrusel automáticamente
startAutoSlide();
//
document.getElementById('hamburger').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
});

//
