/* Navbar */
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle(){
    btn.classList.toggle('abrir');
    nav.classList.toggle('oculto');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);




