/* SCREEN COUNT */

// screen Ticket

let meatScreen = document.querySelector("#meat_screen");
let fishScreen = document.querySelector("#fish_screen");
let vegetableScreen = document.querySelector("#vegetable_screen");

// screen count count

meatScreenCount = 0;
fishScreenCount = 0;
vegetableScreenCount = 0;

window.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "a") {
        console.log("has presionado la tecla a")
        meatScreenCount++;
        meatScreen.innerHTML = meatScreenCount;
    }
    if (event.key == "s") {
        console.log("has presionado la tecla s")
        fishScreenCount++;
        fishScreen.innerHTML = fishScreenCount;
    }
    if (event.key == "d") {
        console.log("has presionado la tecla d")
        vegetableScreenCount++;
        vegetableScreen.innerHTML = vegetableScreenCount;
    }
}, false);