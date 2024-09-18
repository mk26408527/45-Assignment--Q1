let guestList = ["Huzaifa", "Usman", "Fatima", "Mehak"];

let dontCome = guestList[1];

console.log(dontCome, "Can not come");

guestList.splice(1, 2, "Aizal");

console.log("Good News ! We have found a Bigger Table for a Dinner");

guestList.unshift("Osman Gazi");

guestList.push("Ertugal gazi");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Turgut");

console.log("Updated list for our guest");

guestList.forEach(oneguest => console.log(`Hello ${oneguest}, Would you like to Dinner with me?`));

console.log("Unfortunately, The new dinner table wont arrive on time, so i can invite only two Guest to Dinner with me");

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, I can't invite you to Dinner`);
}

console.log("Invitations the last two Guests");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited for Dinner`));

guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);


