var userName = ["Huzaifa", "Maheen", "Isfahan", "Admin", "Amna"];
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again!"));
    }
});
