
let stars = document.getElementById('stars');
let planet = document.getElementById('planet');
let mountain_behind = document.getElementById('mountain_one');
let mountain_front = document.getElementById('mountain_two');
let header = document.querySelector('header');

let stars_two = document.getElementById('stars_footer');
let planet_two = document.getElementById('planet_footer');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    planet.style.top = value * 1.05 + 'px';
    mountain_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0 + 'px';
    header.style.top = value * 0.8 + 'px';

    stars_two.style.left = value * 0.15 + 'px';
    planet_two.style.left = value * 0.08 + 'px';
})