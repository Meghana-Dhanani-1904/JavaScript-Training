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
//     num1=5;//value assigned posiible
//     console.log(num1);
// }
// console.log(num1);

//--Case 21--

// {
//     const num1 = 3;
//   console.log(num1);//3
// }
// const num1=4;
// console.log(num1);//4 variable having const datatype can be redeclared outside the scope more than one at a time but initialization is compulsory

//--Case 22--

// const num1=3;
// {
//     const num1=4;
//     console.log(num1);//4
// }

//--Case 23--

// {
//     const num1=4;
//     const num1=3;
//     console.log(num1);//Syntax Error : because num1=4 has already declared in one scope
// }
// var num1=2;

// var num1=3;
// console.log(num1);
// let cont=13;
// console.log(cont);

// console.log(num2);

// let city=`Kolkata`;
// {
//     let city=`Delhi`;
//     city=`pune`;//valueassigned is possible in let but redeclared is not possible;
//     // let city=`surat`//redeclared not possible
//     console.log(city);
// }
// console.log(city);
// let num1;
//  {
//     num1=5;//value assigned posiible
//     console.log(num1);
//  }
//  console.log(num1);

// oBJECT
// const course = {
// lec:10,
// sec:3,
// title:`Javascript`,
// notes:{
//     introduction:`Welcome to JS course`
// },
// }

// course.price = 30;
// console.log(course);

// const details = {
//     name:`Meghana`,
//     age:20,
//     city:`Ahmedabad`,
//     "First Second name":`Meghana Dhanani`,
// }
// console.log(details);
// delete details.age;
// console.log(details);
// console.log(details.age);

// const obj2= obj1.age=33;

// // obj1.age=22;
// console.log(obj2);
// console.log(obj1.age);

//  Case
// const obj1= {
//     name:`Meghana`,
//     age:20,
//     city:`Ahmedabad`,
//     "First Second name":`Meghana Dhanani`,
//     obj2:{
//         price:299,
//         size:34,
//     },
// }
//  console.log(obj1.obj2);
// console.log(obj1.obj2[2]);
// console.log(obj1.city + "," + obj1.age);

// Case
// myObj = {
//     1: 'First property',
//     'first-name': 'Bruce',
//   }
//   console.log(myObj.1);// SYntax Error
//   console.log(myObj['1']);// First property
//   console.log(myObj[1]);// First property

// console.log(myObj.'first-name');// Syntax Error
// console.log(myObj.first-name);// Syntax Error
// console.log(myObj['first-name']);// Bruce

// Case

// const obj = {
//   name: `Meghana`,
//   "Roll no": 2,
//   obj2: [1, 2, 3, 4, 5],
// };
// console.log(obj);
// console.log(obj.obj2[2]);

// console.log(b);
// let a=12;
// console.log(a);
// let b=33;

// let name=[12,33,44,66,77];
// const obj={
//     name:`Meghana`,
//     age:18,
// }
// console.log("My name is " + obj.name [name[2]]);

// let std_name = {
//   std1: `ASD`,
//   std2: `ere`,
//   std3: `jhjh`,
//   std4: {
//     name1: `kkk`,
//     name2: `rrr`,
//   },
// };
// let std_name2 = Object.assign({}, std_name);//1 method
// let std_name2 = { ...std_name };// 2 method
// let std_name2 = JSON.parse(JSON.stringify(std_name));// 3 method
// std_name2.std2 = `ttt`;
// std_name2.std3 = `rr`;
// std_name2.std1 = `pp`;
// std_name2.std4.name2 = `Meghana`;
// console.log(std_name);
// console.log(std_name2);

// let student = [
//   { name: `Meghana`, age: 18 },
//   { name: `Niki`, age: 22 },
//   { name: `Nency`, age: 23 },
//   { name: `Bhavika`, age: 33 },
//   { name: `Bhumi`, age: 53 }l ,
// ];
// console.log(student[0].name +" is "  + student[0].age + " Years old");
// console.log(student[1].name +" is "  + student[1].age + " Years old");
// console.log(student[2].name +" is "  + student[2].age + " Years old");
// console.log(student[3].name +" is "  + student[3].age + " Years old");
// console.log(student[4].name +" is "  + student[4].age + " Years old");

// let a=20;
// let b=2;
// const aa =12;
// console.log(a+b);
// {
//     let a=1;
//     console.log(aa + (b));
//     console.log(a+b);
// }
// var a=2;
// var b=3;
// var c ;
// function sum(){if(a>b){
//     return a+b;
// }
// console.log(a+b);
// }
// sum();

// const obj ={
//     name:`Meghana`,
//     Age:18,
//     Salary:3000,
//     Address:`Ahmedabad`,
// }
// console.log(obj.name + " "+ obj.Address);
// function details(){
//     return obj;
// }
// console.log(details());
// details();

// const a7 = "Cat" && "Dog";
// console.log(a7);
// const a=23;
// const b=23;
// if(a==b){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let a=`h`;
// let b=34;
// console.log(a+b);

// let a= 23;
// let b=3;
//  if(a!=b){
//      console.log("true");
//     }
//     else{
//     console.log("False");
//}
// bitwise XOR operator example
// let a = 2;
// let result = ~a;
// console.log(result);//-3
// let hours=10;
// if(hours<=10||hours>=10){
//     console.log("Office is closed");
// }
// else{
//     console.log("Office is opened");
// }
// let a=10;
// let b=3;
// console.log( a%=b);

// x = 4;
// y = x--;
// console.log(x);
// console.log(y);

// let obj ={
//     Enroll:23,
//     name:`Meghana`,
//     "Roll no" : 23,
//     Address:"Ahmedabad",
// }
// let details=["Address","Enroll","name","Roll no"];
// console.log(obj[details[1]]);//23

// let a="10";
// let b=20;
//console.log(+("10")+(2));
