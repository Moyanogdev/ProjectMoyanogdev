// LOADER EFECTS

window.addEventListener("load", function(){
    document.getElementById("loader").classList.toggle("loader2")
})

// HOME SCROLL EFECTS

let stars = document.getElementById('stars');
let planet = document.getElementById('planet');
let mountain_behind = document.getElementById('mountain_one');
let mountain_front = document.getElementById('mountain_two');
let header = document.querySelector('header');

let stars_two = document.getElementById('stars_footer');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.15 + 'px';
    planet.style.top = value * 1.05 + 'px';
    mountain_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0 + 'px';
    header.style.top = value * 0.8 + 'px';

    stars_two.style.left = value * 0.20 + 'px';
})