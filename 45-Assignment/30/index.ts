let userName = [];

if (userName.length === 0){
    console.log("We need to find some users!");
}else {
    userName.forEach(oneUser =>{
        if (oneUser === "Admin"){
            console.log(`Hello ${oneUser}, Would you like to see a status report?`);
        }else{
            console.log(`Hello ${oneUser}, Thanks you for logging in again.`)
        }
    })
    }