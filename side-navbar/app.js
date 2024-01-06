const nav = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

//Nav bar btn
toggle.addEventListener('click',() => {
    nav.classList.add('show-sidebar');
    toggle.style.transform = "rotate(270deg)";
})
//Close btn
closeBtn.addEventListener('click',() => {
    toggle.style.transform = 'rotate(0deg)';
    nav.classList.remove('show-sidebar');
})