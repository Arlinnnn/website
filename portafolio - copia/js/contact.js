document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar campos (nombre, email, mensaje)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, introduce un email válido.');
        return;
    }

    // Mostrar overlay de éxito
    document.getElementById('success-overlay').style.display = 'flex';

    // Redirigir al inicio después de 3 segundos
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar campos (nombre, email, servicio, mensaje, y políticas de privacidad)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const services = document.getElementById('services').value;
    const message = document.getElementById('message').value.trim();
    const privacyPolicyChecked = document.getElementById('privacy-policy').checked;

    if (!name || !email || !services || !message) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, introduce un email válido.');
        return;
    }

    if (!privacyPolicyChecked) {
        alert('Debes aceptar las políticas de privacidad para enviar el formulario.');
        return;
    }

    // Mostrar overlay de éxito
    document.getElementById('success-overlay').style.display = 'flex';

    // Redirigir al inicio después de 3 segundos
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}
document.getElementById('hamburger').addEventListener('click', function () {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
});