// automatic text show - home page
var typed = new Typed(".auto-type", {
    strings: ["Developer Java", "Freelancer", "Terráqueo :)"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let toogle = document.querySelector(".toogle");
let menu = document.querySelector(".menu");

toogle.onclick = function(){
    menu.classList.toggle('active')
}

// responsive hamburguer
const hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("show-active")
})

document.querySelectorAll(".nav-link")