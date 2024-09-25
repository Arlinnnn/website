//cookies

// Función para mostrar el popup
function mostrarPopup() {
    document.getElementById('cookiePopup').style.display = 'block';
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById('cookiePopup').style.display = 'none';
}

// Función para generar cookies propias
function generarCookiesPropias() {
    document.cookie = "cookiePropia=true; path=/";
    alert('Cookie propia generada');
}

// Función para generar cookies de terceros
function generarCookiesTerceros() {
    document.cookie = "cookieTercero=true; path=/";
    alert('Cookie de terceros generada');
}

// Función para leer y mostrar las cookies almacenadas
function leerCookies() {
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('='));
    const cookiesAlmacenadas = cookies.map(([name, value]) => `${name}: ${value}`).join('<br>');
    document.getElementById('cookiesAlmacenadas').innerHTML = cookiesAlmacenadas;
}

// Mostrar el popup cuando la página carga
window.onload = function () {
    mostrarPopup();
};
function mostrarPopup() {
    document.getElementById('cookiePopup').style.display = 'block';
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById('cookiePopup').style.display = 'none';
}

// Función para generar cookies propias
function generarCookiesPropias() {
    document.cookie = "cookiePropia=true; path=/";
    alert('Cookie propia generada');
}

// Función para generar cookies de terceros
function generarCookiesTerceros() {
    document.cookie = "cookieTercero=true; path=/";
    alert('Cookie de terceros generada');
}

// Función para leer y mostrar las cookies almacenadas
function leerCookies() {
    const cookies = document.cookie.split('; ').map(cookie => cookie.split('='));
    const cookiesAlmacenadas = cookies.map(([name, value]) => `${name}: ${value}`).join('<br>');
    document.getElementById('cookiesAlmacenadas').innerHTML = cookiesAlmacenadas;
}

// Mostrar el popup cuando la página carga
window.onload = function () {
    mostrarPopup();
};
//html:
//   <div id="cookiePopup" class="cookie-popup"></div>
//     <div class="popup-content">
//         <h2>Uso de Cookies</h2>
//         <p>Esta página utiliza cookies para mejorar la experiencia del usuario. Puedes gestionar tus preferencias a continuación:</p>
//         <button class="button-cookie" onclick="generarCookiesPropias()">Cookies Propias</button>
//         <button class="button-cookie" onclick="generarCookiesTerceros()">Cookies de Terceros</button>
//         <button class="button-cookie" onclick="leerCookies()">Mostrar las cookies creadas</button>
//         <div id="cookiesAlmacenadas"></div>
//         <button class="button-cookie , aceptar" onclick="cerrarPopup()">Aceptar</button>
//     </div>
// </div >
// //css:
//* Inicialmente oculto *//
//  .cookie - popup {
//     display: none;
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background: rgba(0, 0, 0, 0.8);
//     color: #fff;
//     padding: 20px;
//     text - align: center;
//     z - index: 1000;
// }

// .popup - content {
//     background: #333;
//     border - radius: 8px;
//     padding: 20px;
//     display: inline - block;
// }

// .button - cookie {
//     margin: 10px;
//     padding: 10px 20px;
//     background - color: #FFD700;
//     border: none;
//     color: #000;
//     cursor: pointer;
//     border - radius: 5px;
// }
// .aceptar{
//     background - color: #6ed173;
//     color: #000;
// }

// .button - cookie:hover {
//     background - color: #fae051c3;
// }
// .aceptar:hover{
//     background - color: #5cae60;
// }