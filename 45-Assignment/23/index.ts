let apple = "apple";
let uppercaseApple = "APPLE";
let ten = "10";
let twenty = "20";
let fruits = ["Apple", "banana", "mango", "watermelon",]


console.log("\nIs apple is equal to apple?");
console.log(apple == apple);

console.log("\nIs apple is not equal to apple?");
console.log(apple != apple);

console.log("\nIs APPLE is equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("\nIs ten is equal to 20");
console.log(ten == twenty);

console.log("\nIs ten is not equal to 20?");
console.log(ten != twenty);

console.log("\nIs ten is greater than 0");
console.log(10 > 0);

console.log("\nIs twenty is less than 10");
console.log(20 < 10);

console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5);

console.log("\nIs twenty is less than or equal to 10");
console.log(20 <= 10);

console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log (twenty != ten && twenty > ten);

console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log (twenty!= ten && twenty < ten); 

console.log("\nIs twenty is greater than 50 OR twenty is equal to 20");
console.log(20 > 50 || twenty == twenty);

console.log("\nIs twenty is greater than 50 OR twenty is not equal to 20");
console.log(20 > 50 || twenty != twenty);

console.log("\nIs watermelon include in my fruit array");
console.log(fruits.includes("watermelon"));

console.log("\nIs banana is not include in my fruit array");
console.log(!fruits.includes("banana"));
