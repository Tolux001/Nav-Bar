const menu_icon = document.querySelector('nav.mobile--nav .menu-icon img');
const close_icon = document.querySelector('.close--icon');
const nav_bar = document.querySelector('.nav--bar--mobile');

menu_icon.addEventListener('click', ()=> {
    nav_bar.classList.add("active");
})

close_icon.addEventListener('click', ()=> {
    nav_bar.classList.remove("active");
})