let current_users = ["Huzaifa", "Ali", "Faiza", "Faheem", "Aliza"]

let new_users = ["Zoraiz", "Huzaifa", "Amna", "Aliza", "Alishba"]

new_users.forEach(new_one_user => {

    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if (our_condition) {
        console.log(`\nSorry ${new_one_user} is already taken!`)

    }else {
        console.log(`\nThis username ${new_one_user} is available!`)
    }
})