let burger = document.querySelector('.menu-burgir');
let menu = document.querySelector('.menu');

burger.addEventListener('click',()=>{
    menu.classList.toggle('open');
})