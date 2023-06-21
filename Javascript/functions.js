// // Normal Function

// function login(username,password){
//     console.log("Logged in Successfully");
//     console.log(password);
//     console.log(username);
//     console.log(`${username} you have logged in sucessfully and your password is ${password}`);
//     // alert(`${username} you have logged in sucessfully and your password is ${password}`);

// }
// login('Meghana',"Meghana@7867");

// // Function using return and stored in variable

// function calculateArea(width, height) {
//   height = height === undefined ? 1 : height; //default paremeter
//   const area = width * height;
//   return area;
// }
// const area = calculateArea(23, 2);
// console.log("Area is " + area);

// IIFE

// (function loginButton(){
//     console.log("Hello javascript");
// }());

// (function login(upperText,lowerText){
//     console.log(upperText,lowerText);
// })(2,3);

// // Arrow function

// const login=()=>{
//     console.log("Logged in");
// }
// login();

// const sum=(a,b)=> a+b;
// console.log(sum(2,4));

// const login=()=>console.log("Successfully Logged in");
// login();

// const downloadFile = () => console.log("Successfully File downloaded");
// console.log(downloadFile());


// // function  Methods

// // --Method 1
// function getConditions1(a, b) {
//   if (a > b) {
//     console.log("A is Greater than B");
//     console.log(a + b);
//   } else {
//     console.log("B is Greater than A");
//     console.log(a - b);
//   }
// }
// //--Method 2
// const getConditions2 = (a, b) => {
//   if (a > b) {
//     console.log("A is Greater than B");
//     console.log(a + b);
//   } else {
//     console.log("B is Greater than A");
//     console.log(a - b);
//   }
// };
// //--Method 3
// const getConditions3 = (a, b) =>
//   a > b
//     ? console.log("A is greater") || console.log(a + b)
//     : console.log("A is greater") || console.log(a - b);

// getConditions1(200, 100);
// getConditions2(200, 100);
// getConditions3(200, 100);
