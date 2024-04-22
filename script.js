const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const ul = document.querySelector("header nav .nav-links ul");
const footerYear = document.querySelector(".footerYear");
const date = new Date();
const year = date.getFullYear();

footerYear.innerHTML = year;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    if(hamburger.classList.contains('active')){
        ul.style.left='0%';
    }else{
        ul.style.left='-100%';
    }
}

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})