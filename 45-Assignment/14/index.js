var guestList = ["Huzaifa", "Afsheen", "Irtiza",];
var dontCome = guestList[2];
console.log(dontCome, "can't come");
guestList.splice(2, 3, "Amna");
guestList.forEach(function (guest) { return console.log("Hy how are you ".concat(guest, ", Would you like to Dinner with me?")); });
