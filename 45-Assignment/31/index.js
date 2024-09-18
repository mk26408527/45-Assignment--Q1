var current_users = ["Huzaifa", "Ali", "Faiza", "Faheem", "Aliza"];
var new_users = ["Zoraiz", "Huzaifa", "Amna", "Aliza", "Alishba"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("\nSorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("\nThis username ".concat(new_one_user, " is available!"));
    }
});
