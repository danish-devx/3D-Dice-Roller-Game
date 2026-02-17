let dice = document.querySelector(".dice");
let rollBtn = document.querySelector(".roll");

rollBtn.addEventListener("click", function () {

    let number = Math.floor(Math.random() * 6) + 1;

    dice.style.animation = "none";
    dice.offsetHeight; 
    dice.style.animation = "rolling 4s";

    if (number === 1) {
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
    else if (number === 2) {
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
    }
    else if (number === 3) {
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
    }
    else if (number === 4) {
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
    }
    else if (number === 5) {
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
    }
    else if (number === 6) {
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
    }

    console.log("Dice Number:", number);

});