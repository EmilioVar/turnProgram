// BUTTONS

let meatBtn = document.querySelector("#meat");
let fishBtn = document.querySelector("#fish");
let vegetableBtn = document.querySelector("#vegetable");

// TICKET

let ticketNum = document.querySelector(".ticketNum");
let categoryName = document.querySelector(".categoryName");

// SCREEN

let meatScreen = document.querySelector("#meat_screen");
let fishScreen = document.querySelector("#fish_screen");
let vegetableScreen = document.querySelector("#vegetable_screen");

// button count 

meat_count = 0;
fish_count = 0;
vegetable_count = 0;

// screen count

meatScreenCount = 0;
fishScreenCount = 0;
vegetableScreenCount = 0;


// meat button

meatBtn.addEventListener("click", function () {
    meat_count++;
    ticketNum.innerHTML = meat_count;
    categoryName.innerHTML = "Carnicería";
    console.log(meat_count);
});

// fish button

fishBtn.addEventListener("click", function () {
    fish_count++;
    ticketNum.innerHTML = fish_count;
    categoryName.innerHTML = "Pescadería";
    console.log(fish_count)
});

// vegetable button

vegetableBtn.addEventListener("click", function () {
    vegetable_count++;
    ticketNum.innerHTML = vegetable_count;
    categoryName.innerHTML = "Verdurería";
    console.log(vegetable_count)
});

/* printer function */

function imprSelec(nombre) {
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write(ficha.innerHTML);
    ventimp.document.close();
    ventimp.print();
    ventimp.close();
}

/**
 * SCREEN COUNT
 * añadimos e
 */

window.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "a") {
        console.log("has presionado la tecla a")
        meatScreenCount++;
        meatScreen.innerHTML = meatScreenCount;
    }
    if (event.key == "s") {
        console.log("has presionado la tecla a")
        fishScreenCount++;
        fishScreen.innerHTML = fishScreenCount;
    }
    if (event.key == "d") {
        console.log("has presionado la tecla a")
        vegetableScreenCount++;
        vegetableScreen.innerHTML = vegetableScreenCount;
    }
}, false);