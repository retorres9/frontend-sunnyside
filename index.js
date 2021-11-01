const navBtn = document.querySelector('.nav__menu_button');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
})