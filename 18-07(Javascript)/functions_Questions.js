//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value

// function sayHello() {}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)

// function calculateSum(num1, num2) {
//   return num1 + num2;
// }
// console.log(calculateSum(2, 3));

// 2 Method

// let calculateSum = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(calculateSum(4, 2));

// 3 Method

// const calculateSum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(calculateSum(2, 6));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Create a function called printArray that takes an array called arr as a parameter and prints the array. Write the syntax for this function.

// let array = [1, 2, 3, 4, 5, 6];

// function printArray([array]) {
//   console.log(array);
// }
// printArray([array]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply that takes two parameters a and b, and returns their multiplication.

// let multiply = (a, b) => {
//   return a * b;
// };
// console.log(multiply(2, 4));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//What is the syntax for calling a function named myFunction that doesn't take any parameters?

// myFunction();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number. Write the syntax for this arrow function.

// let squareNumber = (num) => {
//   return num * num;
// };
// console.log(squareNumber(3));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Write the syntax for declaring a JavaScript function called getFullName that takes two parameters firstName and lastName, and returns the full name as a string.

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(getFullName("Meghana", "Dhanani"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, and returns the area of a rectangle?

// function calculateArea(length, width) {
//   return length * width;
// }
// console.log(calculateArea(2, 3));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

// function isEven(num) {
//   return num % 2 === 0 ? true : false;
// }

// console.log(isEven(2));

//++++++++++++++++++++++++++++++++++++++++++++++++

//Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
// Write the syntax for this arrow function.
// Write the syntax for normal function.

// function calculatePrice(price, discount = 0.1) {
//   let discountedPrice = price - price * discount;
//   return discountedPrice;
// }

// let calculatePrice = (price, discount = 0.1) => {
//   let discountedPrice = price - price * discount;
//   return discountedPrice;
// };

// console.log(calculatePrice(2000));

//++++++++++++++++++++++++++++++++++++++++++++++++

//Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

// function isEven(num) {
//   return num % 2 === 0 ? true : false;
// }
// console.log(isEven(9));

//+++++++++++++++++++++++++++++++++++++++++++++++++

//What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)
//  a : With normal function (write all four types of functions as we discussed in session)
// b :  With arrow function (write all four types of functions as we discussed in session)

// function calculateMultiply(num1 = 1, num2 = 1) {
//   return num1 * num2;
// }
// console.log(calculateMultiply(2, 3));

// let calculateMultipl = (num1 = 1, num2 = 1) => {
//   return num1 * num2;
// };
// console.log(calculateMultiply(2, 5));

//++++++++++++++++++++++++++++++++++++++++++++++++

// Write the syntax for declaring a JavaScript function called greet that takes parameters and doesn't return any value. (if not passed an argument then prints ‘Anonymous’)

// function greet(greetName) {
//   if (greetName) {
//     return `Hello ${greetName}`;
//   } else {
//     return "Hello Anonymous";
//   }
// }
// console.log(greet());

//+++++++++++++++++++++++++++++++++++++++++++++

//Write the syntax for declaring a JavaScript function called exponent that takes parameters and returns an exponent of passed parameters. (if not passed an argument then returns power 2)

// function exponent(base, expo = 2) {
//   return base ** expo;
// }
// console.log(exponent(2, 3));
