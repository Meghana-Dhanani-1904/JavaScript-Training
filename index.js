// --Case 1--

// var num1=2;
// let num1=3;//SyntaxError : same varible name should not be declared
// {
//     console.log(num1);
// }
// console.log(num1);

// --Case 2--

// var num1=2;
// let num2=3;
// {
//     console.log(num2);//3
// }
// console.log(num1);//2

// --Case 3--

// var num1=2;
// {
//     let num2=3;
//     console.log(num1);//2
//     console.log(num2);//3
// }
// console.log(num2);//Reference Error : num2 not defined

//--Case 4--

// var num1=2;
// let num2=3;
// {
//     console.log(num1);//2
//     console.log(num2);//3
// }
// console.log(num2);//3

// --Case 5--

// var num1=2;
// {
//     console.log(num1);//2
//     console.log(num2);//Reference Error : cannot access num2 before initialization
// }
// let num2=3;
// console.log(num2);//will not show output because of interpreter

// --Case 6--

// var num1;
// {
//     console.log(num1);//undefined
//     console.log(num2);//Reference Error : cannot access num2 before initialization
// }
// let num2=3;

// --Case 7--

// var num1;
// {
//     console.log(num1);//undefined
//     var num1=5;
//     let num2=3;
//     console.log(num2);//3
// }
// console.log(num1);//5

// --Case 8--

// const num1 = 3;
// let num2 = 6;
// {
//   const num1 = 5;
//   console.log(num1); //5
//   let num2 = 2;
//   console.log(num2); //2
// }
// console.log(num2); //6
// console.log(num1);//3

// --Case 9--

// const num1;//Syntax Error : always initialized const with declaration
// let num2 = 6;
// {
//   const num1 = 5;
//   console.log(num1); //5
//   let num2 = 2;
//   console.log(num2); //2
// }
// console.log(num2); //6
// console.log(num1);//will not run because num1 is not initialized

//--Case 10--

// write a variable with invalid name and check the errors.

// var 0_myname="Meghana";//SyntaxError: variable name should not be start with 0-9
// console.log(0_myname);

//--Case 11--

// var _myname="Meghana";
// console.log(_myname);//Meghana

//--Case 12--

// var $myname="Meghana";
// console.log($_myname);//Reference Error : not defined

// --Case 13--

// what is "undefined"? // write a examples

// var num1;
// {
//     console.log(num1)//unddefined
//     var num1=3;
//     console.log(num1);//3
// }
// console.log(num1);//3
// let num2=1;
// console.log(num2);//Reference Error : num2 is not defined,let have a block scope, num2 is defined inside the block that's why it shows error

// --Case 14--

// write a variable name which can store your name

// let myName="Meghana"
// console.log(myName);//Meghana

// --Case 15--

// write a variable name which can store your name

// let planetName="Mars"
// console.log(planetName);//Mars

// --Case 16--

// declare a variable which can store the value of PI = 3.14

// let PI=3.14;
// console.log(PI);

// --Case 17--

// declare a variable which can store the value of PI = 3.14

// let boolean_value1=true;
// let boolean_value2=false;
// console.log(boolean_value1);
// console.log(boolean_value2);

//--Case 18--

// let num1=3;
// {
//     console.log(num1);//3
// }

//--Case 19--

// let num1;
// {
//     console.log(num1);//undefined
// }

//--Case 20--

// let num1;
// {
//     let num1=5;
//     console.log(num1);//5
// }
// console.log(num1);//undefined

//--Case 20--

// let num1;
// {
//     num1=5;
//     console.log(num1);//5
// }
// console.log(num1);//5



