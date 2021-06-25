const d = document;
const btnMenu = d.getElementById('btn-hamburger');
const menu = d.querySelector('.menu')
btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('cambiaso')
})