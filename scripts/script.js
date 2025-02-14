let btn = document.getElementById("btn")
let message = document.getElementById("message")
let header = document.querySelector("header")
const body = document.querySelector("body")



window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.backgroundImage = "linear-gradient(to right, #d1d1fa 30%, #ffffff)";
    } else {
        header.style.backgroundImage = "none"; // Remet à l'état initial
    }
});


btn.addEventListener("click" , () =>{
    body.style.backgroundColor = "rgb(252, 245, 207)"
    message.innerHTML = "Bonjour, après avoir exploré mon site et découvert ma passion pour le développement et l'innovation, vous verrez que ma détermination et mon engagement font de moi un candidat idéal. Intégrer la formation chez Simplon serait une opportunité unique pour moi de concrétiser mes ambitions et d'apporter une réelle valeur à la tech. J'espère avoir la chance de rejoindre cette aventure enrichissante !"
    message.style.display = "block";


})