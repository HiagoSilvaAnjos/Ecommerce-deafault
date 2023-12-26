const iconInnerMenu = document.querySelector('.nav_bar');
const menuButton = document.querySelector('.menu_button');

menuButton.addEventListener('click', () => {
    iconInnerMenu.classList.toggle('show-menu');
})