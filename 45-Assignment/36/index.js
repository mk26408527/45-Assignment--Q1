"use strict";
function make_shirt(size = "Large", printMessage = "I love Type Script") {
    console.log(`\nCreating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love Java Script");
console.log("\n******************************************************************");
