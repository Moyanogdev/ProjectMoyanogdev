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

// NAVIGATION BAR EFECTS | RESPONSIVE

let sideMenu = document.getElementById("sideMenu");

function openmenu(){
    sideMenu.style.right = "0";
}

function closemenu(){
    sideMenu.style.right = "-200px";
}

// LANGUAGE OPTION

let check=document.querySelector(".check");
check.addEventListener('click', language);

function language(){
    let id=check.checked;
    if(id == true){
        location.href="es/index.html";
    } else{
        location.href="../index.html";
    }
}

// SMOOTH SCROLL

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// EMAIL JS 

const btn = document.getElementById('button');
const msgConfirm = document.getElementById("msgConfirm");

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = ' Sending... ';

const serviceID = 'default_service';
const templateID = 'template_51an4h7';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        msgConfirm.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msgConfirm.innerHTML = ""
        },5000)
        form.reset()
    }, (err) => {
        btn.value = 'Send Message';
        alert(JSON.stringify(err));
        });
});

// SCROLL UP EFECTS

const scrollUp = () => {
    const scrollUp = document.getElementById('scrollUp')
    this.scrollY >= 1500 ? scrollUp.classList.add('showScroll')
                        : scrollUp.classList.remove('showScroll')
}

window.addEventListener('scroll', scrollUp);