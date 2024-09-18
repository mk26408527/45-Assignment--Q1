let guestList = ["Huzaifa", "Afsheen", "Irtiza",];

let dontCome = guestList[2];

console.log(dontCome, "can't come");

guestList.splice(2, 3, "Amna");

guestList.forEach(guest => console.log(`Hy how are you ${guest}, Would you like to Dinner with me?`));

