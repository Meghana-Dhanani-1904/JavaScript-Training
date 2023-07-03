// const names = [
//   { first_name: "Handnm", last_name: "L demo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// const newProperty = names.map((full-name) => {
//   return { ...name, full_name: full-name.first_name + " " + full-name.last_name };
});

// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(sum(1, 2));

// const evenNumber = (num) => {
//   for (i = 1; i <= 10; i++) {
//     if (num % 2 == 0) {
//       console.log("Even Number");
//       continue;
//     } else {
//       console.log("Odd Number");
//     }
//   }
// };
// console.log(evenNumber(24));

// const oddNum=(num)=>{if(num%2!=0){
//   console.log("odd num");
// }}

// let array = [1, 2, 3, 4];
// let arr = array.map((value) => value);
// console.log(arr);

// let arr = [
//   {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     ppu: 0.55,
//     batters: {
//       batter: [
//         { id: "1001", type: "Regular" },
//         { id: "1002", type: "Chocolate" },
//         { id: "1003", type: "Blueberry" },
//         { id: "1004", type: "Devil's Food" },
//       ],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5007", type: "Powdered Sugar" },
//       { id: "5006", type: "Chocolate with Sprinkles" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0002",
//     type: "donut2",
//     name: "Raised",
//     ppu: 0.55,
//     batters: {
//       batter: [{ id: "1001", type: "Regular" }],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0003",
//     type: "donut3",
//     name: "Old Fashioned",
//     ppu: 0.55,
//     batters: {
//       batter: [
//         { id: "1001", type: "Regular" },
//         { id: "1002", type: "Chocolate" },
//       ],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0004",
//     type: "donut1",
//     name: "Old Fashioned",
//     ppu: 0.55,
//     batters: {
//       batter: [{ id: "1001", type: "Regular" }],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
// ];

// const search = arr.filter(function (item) {
//   return item.batters.batter[0];
// });
// console.log(search);
// function isCho() {
//   let result = arr.filter((x) => {
// console.log(arr[0].batters.batter[0].type == "Regular");
//   });
// } //doubt
// isCho();

// console.log(result);
// console.log(arr);

// function toppingChocolate(array) {
//   let a = array.filter((value, index, arr) => {
//     let topping = value.topping;
//     for (let i = 0; i < topping.length; i++) {
//       if (topping[i].type == "Chocolate") {
//         console.log(value.type + ":");
//         console.log(value);
//       }
//     }
//   });
//   console.log(a);
// }
// toppingChocolate(arr);

// const result = arr.filter(
//   (arr) =>
//     arr.batters.batter.some((batter) => batter.type === "Regular") &&
//     arr.topping.some((topping) => topping.type === "Chocolate")
// );
// console.log(result);

// const result = [].concat(...arr.map((donut) => donut.batters.batter));
// console.log(result);

// function filterItems(topping) {
//   return topping.filter(id);
// }
// console.log(filterItems(id));

// const names = [
//   { first_name: "Handnm", last_name: "L demo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];

// const names = names.map((name) => {
//   return { ...name, full_name: name.first_name + " " + name.last_name };
// });

// console.log(names);

// const users = [
//   { first_name: "Handnm", last_name: "L demo", age: 17 },
//   { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//   { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//   { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//   { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//   { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//   { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ];

// const newKey = users.map((user) => {
//   return { ...user, isMature: {} };
// });
// console.log(newKey);

// let arr = [1, 2, 3, 5];
// console.log(arr[-1]); //undefined

// const nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let values of nestedArray) {
//   console.log(values[0]);
// }

// => print all items of nested array
// for (const entry of nestedArray) {
//   console.log(entry);
// }

// let array = [1, 2, 3, 4, "Meghana"];
// // const arr = array.map(String);
// for (let value of array) {
//   if (value === String) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   // console.log(value);
// }
// console.log(array);
// console.log(arr);
// let array=[1,2,3,4,5,6,7,14,15,15,16,19]

// function isBigEnough(value) {
//   return value >= 10;
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]

// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"
// let string = "george raymond Richard Martin";
// let result = string
//   .split(" ")
//   .map((word) => word.charAt(0))
//   .join("")
//   .toUpperCase(0);
// console.log(result);

// function convertToNumbers(sentence) {
//   const words = sentence.split(" ");
//   const convertedWords = words.map((word) => {
//     if (word.length <= 2) {
//       return word; // Do not convert if word has 2 or fewer characters
//     } else {
//       const firstChar = word[0];
//       const lastChar = word[word.length - 1];
//       const middleChars = (word.length - 2).toString();
//       return `${firstChar}${middleChars}${lastChar}`;
//     }
//   });
//   return convertedWords.join(" ");
// }

// console.log(
//   convertToNumbers("Every developer likes to mix kubernetes and javascript")
// );

// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];

// const productsByCategory = products.reduce((acc, product) => {
//   const category = product.category;
//   if (!acc[category]) {
//     acc[category] = [];
//   }
//   acc[category].push(product);
//   return acc;
// }, {});

// // Use map to calculate the average price for each category
// const avgPriceByCategory = Object.keys(productsByCategory).map((category) => {
//   const sum = productsByCategory[category].reduce(
//     (acc, product) => acc + product.price,
//     0
//   );
//   return {
//     category: category,
//     average: sum / productsByCategory[category].length,
//   };
// });
// console.log(avgPriceByCategory);

// let result = products.filter((x) => {
//   if (x.category == "Clothes") {
//     let count = Object.keys(x).length;
//     return count;
//   }
// });

// function totalNumber(products) {
//   let newObject = {};
//   let Clothes = products.filter((value) => value.category == "Clothes");
//   let Electronics = products.filter((value) => value.category == "Electronics");
//   let a = Clothes.length;
//   let b = Electronics.length;
//   newObject.Clothes = a;
//   newObject.Electronics = b;
//   return newObject;
//   //   return Clothes;
//   //   return Electronics;
// }

// function totalNumber(products) {
//   let newObject = {};
//   let Clothes = products.filter((value) => value.category == "Clothes");
//   let Electronics = products.filter((value) => value.category == "Electronics");
//   let a = (value.price / value.price.length) * value.price.length;
//   let b = Electronics;
//   newObject.Clothes = a;
//   newObject.Electronics = b;
//   return newObject;
// }
// console.log(totalNumber(products));

// function price(products) {
//   const average = (array) => array.reduce((a, b) => a + b) / array.length;
//   console.log(average([products]));
// }
// console.log(price(products));

// function findClothes(products) {
//   let Clothes = products.filter((value) => value.price > 60);
//   return Clothes;
// }
// console.log(findClothes(products));

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push((a = num * 2));
//   return a;
// });
// console.log(doubled);

// 13 Questions of array using find mehod

//*** 1 ***
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

// let result = names.map((name) => {
//   return { ...name, full_name: name.first_name + " " + name.last_name };
// });
// console.log(result);

//*** 5 ***

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

// for (let key in nestedObject) {
//   if (typeof nestedObject[key] === "object") {
//     for (let nestedKey in nestedObject[key]) {
//       console.log(nestedObject[key][nestedKey]);
//     }
//   } else {
//     console.log(nestedObject[key]);
//   }
// }

//  => print all items of this object in line
//  //Output:
//  Vishal Kukreja
//  32
//  123 Mumbai fashion St
//  Midtown
//  MH
//  reading
//  drawing
//  gardening


// for (let key in nestedObject) {
//   if (typeof nestedObject[key] === "object") {
//     for (let nestedKey in nestedObject[key]) {
//       console.log(nestedObject[key][nestedKey]);
//     }
//   } else {
//     console.log(nestedObject[key]);
//   }
// }
// let values = Object.values(nestedObject);
// console.log(values);
// let result = nestedObject.filter((values) => {
//   console.log(values);
// });
// console.log(result);


