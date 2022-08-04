let meatBtn = document.querySelector("#meat");
let fishBtn = document.querySelector("#fish");
let vegetableBtn = document.querySelector("#vegetable");
let meatValue = document.querySelector(".meatValue");
let ticketNum = document.querySelector(".ticketNum");
let categoryName = document.querySelector(".categoryName");

$meat_count = 0;
$fish_count = 0;
$vegetable_count = 0;

// meat button

meatBtn.addEventListener("click", function () {
    $meat_count++;
    meatValue.innerHTML = $meat_count;
    ticketNum.innerHTML = $meat_count;
    categoryName.innerHTML = "Carnicería";
    console.log($meat_count);
});

// fish button

fishBtn.addEventListener("click", function () {
    $fish_count++;
    ticketNum.innerHTML = $fish_count;
    categoryName.innerHTML = "Pescadería";
    console.log($fish_count)
});

// vegetable button

vegetableBtn.addEventListener("click", function () {
    $vegetable_count++;
    ticketNum.innerHTML = $vegetable_count;
    categoryName.innerHTML = "Verdurería";
    console.log($vegetable_count)
});

/* printer function */

function imprSelec(nombre) {
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write( ficha.innerHTML );
    ventimp.document.close();
    ventimp.print( );
    ventimp.close();
}