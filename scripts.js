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