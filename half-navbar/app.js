// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',() => {
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
        navToggle.style.transform = "rotate(0deg)";
    }else {
        links.classList.add('show-links');
        navToggle.style.transform = "rotate(90deg)";
    }
    //links.classList.toggle('.show-links')
})