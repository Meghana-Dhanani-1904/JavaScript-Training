// 1.Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value.

// function sayHello(){
//     console.log("Say Hello");
// }
// sayHello();

//2.What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)

// function calculateSum(num1,num2){
//     const result=num1+num2;
//     return result;
// }
// const result=calculateSum(2,3)
// console.log(result);
//         //  OR
// console.log(calculateSum(2,3));

// 3.Create a function called printArray that takes an array called arr as a parameter and prints the array. Write the syntax for this function.

// let arr = [23, 34, 55];
// function printArray(arr) {
//   return arr;
// }
// console.log(printArray(arr));

//4.Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply that takes two parameters a and b, and returns their multiplication.

// const multiply=function(a,b){
//     return a*b;
// }
// console.log(multiply(2,30));

// 5.What is the syntax for calling a function named myFunction that doesn't take any parameters?

// function myFunction(){
// console.log("hello");
// }
// myFunction();

// 6.Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number. Write the syntax for this arrow function.

// const squareNumber=(num)=>{
//     return num**2;
// }
// console.log(squareNumber(2));

// 7.Write the syntax for declaring a JavaScript function called getFullName that takes two parameters firstName and lastName, and returns the full name as a string.

// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// console.log(getFullName("Meghana", "Dhanani"));

// 8.What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, and returns the area of a rectangle?

// function calculateArea(length,width){
//     return length * width;
// }
// console.log(calculateArea(2,4));

// 9.Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

// function Even(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(Even(9));

// 10.Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session) (total: 8 functions definition)

// Method 1(with argument , with return)

// function maxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//      return "num1 is max";
//     } else if (num2 > num1 && num2 > num3) {
//     return "num2 is max";
//     } else {
//     return "num3 is max";
//     }
// }
// console.log(maxNumber(2,5,88));

// Method 2(with argument , without return)

// function maxNumber(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//      console.log("num1 is max");
//     } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is max");
//     } else {
//     console.log("num3 is max");
//     }
// }
// maxNumber(22,3,44);

// Method 3(without argument , with return)

// function maxNumber(num1=2, num2=45, num3=9) {
//     if (num1 > num2 && num1 > num3) {
//      console.log("num1 is max");
//     } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is max");
//     } else {
//     console.log("num3 is max");
//     }
// }
// maxNumber();

// Method 4(without argument , without return)

// function maxNumber(num1=2, num2=45, num3=9) {
//     if (num1 > num2 && num1 > num3) {
//      console.log("num1 is max");
//     } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is max");
//     } else {
//     console.log("num3 is max");
//     }
// }

// Method 5(with argument,with return)

// function maxNumber(num1, num2, num3) {
//   return num1 > num2 && num1 > num3 ? "num1 is max": num2 > num3 && num2 > num1 ? "num2 is max": "num3 is max"
//   ;
// }
// console.log(maxNumber(23, 3, 64));

// Method 6(with argument,without return)

// function maxNumber(num1, num2, num3) {
//   console.log(
//     num1 > num2 && num1 > num3
//       ? "num1 is max"
//       : num2 > num3 && num2 > num1
//       ? "num2 is max"
//       : "num3 is max"
//   );
// }
// maxNumber(23, 3, 64);

// Method 7(without argument,with return)

// function maxNumber(num1=44, num2=66, num3=22) {
//   return num1 > num2 && num1 > num3? "num1 is max": num2 > num3 && num2 > num1? "num2 is max": "num3 is max";
// }
// let result= console.log(maxNumber());

// Method 8(without argument,without return)

// function maxNumber(num1=44, num2=6, num3=22) {
//  console.log(num1 > num2 && num1 > num3? "num1 is max": num2 > num3 && num2 > num1? "num2 is max": "num3 is max");
// }
// maxNumber();

// 11.Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
// a.Write the syntax for this arrow function.
// b.Write the syntax for normal function.

//Normal Function

// function calculatePrice(price,discount){
//   let discountedPrice= price-(price*discount/100);
//   return discountedPrice;
// }
// console.log(calculatePrice(200,10));

//Arrow Function

// const calculatePrice = (price, discount) =>
//   console.log(price - (price * discount) / 100);
// calculatePrice(200, 10);

//12.Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

// function isEven(num) {
//   return num % 2 == 0 ? true : false;
// }
// console.log(isEven(23));

//Arrow Funtion method 1

// const isEven=(num) =>console.log(num % 2 == 0 ? true : false);
//   isEven(4);

//Arrow Function method 2

// const isEven=(num) =>num % 2 == 0 ? true : false;
// console.log(isEven(4));

//Arrow Function method 3

//  const isEven=(num) =>{
//     console.log(num % 2 == 0 ? true : false);
// }
// isEven(55);

//13.What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)
// a. With normal function (write all four types of functions as we discussed in session)
// b. With arrow function (write all four types of functions as we discussed in session)

function calculateMultiply(num1, num2) {
  return (result = num1 * num2);
}
console.log(calculateMultiply(10, 3));
