// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1
// const names = [
//   { first_name: "Handnm", last_name: "L demo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];
// // Write a code that adds new key in each object named
// // full_name: first_name + last_name

// let result = names.map((fullName) => {
//   return {
//     ...fullName,
//     full_name: fullName.first_name + " " + fullName.last_name,
//   };
// });
// console.log(result);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2
// const users = [
//   { first_name: "Handnm", last_name: "L demo", age: 17 },
//   { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//   { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//   { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//   { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//   { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//   { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ];
// //    Write a code that adds new key in each object named : isMature

// let result = users.map((x) => ({
//   ...x,
//   isMAture: x.age >= 18 ? true : false,
// }));
// console.log(result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3

// let arr = [1, 2, 3, 5];
// console.log(arr[-1]); //undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4

// const nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// //   => print all items of nested array

// for (let i = 0; i < 3; i++) {//i[0] = 1,2,3 // i[1] = 4,5,6 // i[2] = 7,8,9
//   for (let j = 0; j < 3; j++) {//j[0] = 1,4,7  // j[1] = 2,5,8  // j[2] = 3,6,9
//     console.log(nestedArray[i][j]);

//     // console.log("i :", i);
//     // console.log("j :", j);
//   }
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const nestedObject = {
//   name: "Vishal Kukreja",
//   age: 32,
//   address: {
//     street: "123 Mumbai fashion St",
//     city: "Midtown",
//     state: "MH",
//   },
//   hobbies: ["reading", "drawing", "gardening"],
// };

// for (const keys in nestedObject) {
//   if (typeof nestedObject[keys] === "object") {
//     for (objKey in nestedObject[keys]) {
//       console.log(nestedObject[keys][objKey]);
//     }
//   } else {
//     console.log(nestedObject[keys]);
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 6

// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// function isNumber(arr1) {
//   for (i = 0; i < arr1.length; i++) {
//     if (typeof arr1[i] === "number" && !isNaN(arr1[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// let array1 = [1, 2, 3];
// console.log(isNumber(array1));

// let array2 = ["1", "a", "h"];
// console.log(isNumber(array2));

// let array3 = ["a", 3, "h"];
// console.log(isNumber(array3));

// let array4 = ["a", "3df", "gh"];
// console.log(isNumber(array4));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 7

// const numbers = [1, 2, 3, 4];
// => convert all number to string in given array

// let numToString = numbers.map((x) => x.toString());
// console.log(numToString);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 8

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 10
// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// Method 1

// let string1 = "George Raymond Richard Martin";
// let InitialWord = string1.split(" ").map((x) => x.charAt(0));
// console.log(InitialWord.join(""));

//Method 2

// function initialWord(string) {
//   let result = string
//     .split(" ")
//     .map((x) => x.charAt(0))
//     .join("")
//     .toUpperCase();
//   return result;
// }
// console.log(initialWord("George Raymond Richard Martin"));
// console.log(initialWord("george raymond Richard Martin"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 11

// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// let letterCount = "Every developer likes to mix kubernetes and javascript";
// function middleCount(string) {
//   let str = string.split(" ").map((x) => {
//     if (x.length > 3) {
//       let firstChar = x.charAt(0);
//       let lastChar = x.charAt(x.length - 1);
//       let midChar = x.lenght - 2;
//       return `${firstChar}${midChar}${lastChar}`;
//     } else {
//       return x;
//     }
//   });
//   return str.join(" ");
// }
// console.log(middleCount(letterCount));

let str1 = "evy sfju dfrie ejk to jhdfkjhkd";
function converter(str) {
  let res = str.split(" ").map((item) => {
    if (item.length > 3) {
      let firstChar = item.charAt(0);
      let lastChar = item.charAt(item.length - 1);
      let midNum = item.length - 2;
      return `${firstChar}${midNum}${lastChar}`;
    } else {
      return item;
    }
  });
  return res.join(" ");
}
console.log(converter(str1));
