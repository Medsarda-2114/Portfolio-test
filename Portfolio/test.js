const burger = document.querySelector('.burger');
const section = document.querySelector('.sec-1');
const header = document.querySelector('.header');



burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    section.classList.toggle('active');
    header.classList.toggle('active');
});
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

