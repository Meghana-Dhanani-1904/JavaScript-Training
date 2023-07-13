// let a = Number(3.14);
// console.log(a);//3.14

// let a = Number("123abc");
// console.log(a);//NaN

// let a = Number("abd");
// console.log(a);//NAN

/* NUmber methods */

// 1. parseInt

// let a = parseInt("12abd23");
// console.log(a); //123 : because parseInt ignores non-numeric value and returns only numeric values

// let a = parseInt("12abd");
// console.log(a); //12

// let a = parseInt("12abd.23");
// console.log(a); //12

// let a = Number.parseInt("12abd23");
// console.log(a); //12

// let a = parseInt(1);
// console.log(a);

// let binary = "1110";
// let decimal = parseInt(binary, 2);
// console.log(decimal); // Output: 10

// let number = parseInt(undefined);
// console.log(number); // NaN

// let number = parseInt(NaN);
// console.log(number); // NaN

// let number = Number.parseInt([23, 7]);
// console.log(number); // 0

/* parseFloat */

// let a = parseFloat("123");
// console.log(a);//123

// let a = parseFloat("123.sdfg");
// console.log(a);//123

// let a = parseFloat(undefined);//null=>NAN
// console.log(a); //NaN

// let a = parseFloat("2.2") + "2a";
// console.log(a); //45.5

// let a = parseFloat("2.2") + Number("2");
// console.log(a); //4.2

// let a = parseFloat("2.2") * Number("2a");
// console.log(a); //NaN

/* toFixed */

// function toFixedmethod(x) {
//   return Number.parseFloat(x).toFixed(2);
// }

// console.log(toFixedmethod("-12334.82366")); //(2) : -12334.82

// console.log(toFixedmethod("12334.82366")); //(20) : 2334.82366000000001804437

// console.log(toFixedmethod("2334.82366".length)); // 10.00

// console.log(toFixedmethod("2334.82366")); //(undefined / null / NaN) : 2335 => add 1 before decimal value if given number is >= 5

// console.log(toFixedmethod(2334.6666));//(-2): Range Error

// console.log(toFixedmethod("2334.aaa6666")); //2334.00

// console.log(toFixedmethod("2334.2a46666"));//(3): 2334.200

// console.log(toFixedmethod("6.02 * 10 ** 23")); //(20): 6.01999999999999957367

/* date questions */

// let date = new Date().getDate();
// let month = new Date().getMonth();
// let year = new Date().getFullYear();
// console.log(date + "/" + month + "/" + year);

// function formate(yyyy, month, date) {
//   let date = new Date().getDate();
//   let month = new Date().getMonth();
//   let yyyy = new Date().getFullYear();

//   return date + "/" + month + "/" + yyyy;
// }

// console.log(formate(yyyy, month, date));

// function formet(transform) {
//   var a = new Date();

//   final_date = a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear();
//   return final_date;
// }

// console.log(formet("dd/mm/yyyy"));

// const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
// console.log(utcDate);

// // Create a new Date object
// const currentDate = new Date();

// // Get the UTC components
// const utcYear = currentDate.getUTCFullYear();
// const utcMonth = currentDate.getUTCMonth() + 1; // Months are zero-based, so add 1
// const utcDay = currentDate.getUTCDate();
// const utcHours = currentDate.getUTCHours();
// const utcMinutes = currentDate.getUTCMinutes();
// const utcSeconds = currentDate.getUTCSeconds();

// // Create a UTC string representation
// const utcString = `${utcYear}-${utcMonth.toString().padStart(2, '0')}-${utcDay.toString().padStart(2, '0')} ${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}`;

// console.log(utcString);

// const date = new Date();
// const formattedDate = date.toLocaleDateString();
// console.log(formattedDate);

// const currentDate = new Date();

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

// const localDateString = currentDate.toLocaleDateString(undefined, options);

// console.log(localDateString);

// const currentDate = new Date();
// const localDateString = currentDate.toLocaleDateString();
// console.log(localDateString);

// const currentDate = new Date();
// const locales = ["en-US", "fr-FR", "de-DE"];
// const localDateString = currentDate.toLocaleDateString(locales);
// console.log(localDateString);

// const currentDate = new Date();
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// const localDateString = currentDate.toLocaleDateString("en-GB", options);
// console.log(localDateString);

// const currentDate = new Date();
// const localDateString = currentDate.toLocaleDateString(undefined);
// console.log(localDateString);

// let date1 = new Date("2023-12-07");
// let date2 = new Date("2020-12-29");
// let diff = date2.getTime() - date1.getTime();
// let diffDays = diff / (1000 * 3600 * 24);

// console.log(Math.abs(diffDays));

// Create two Date objects representing the dates
// const date1 = new Date("2023-07-10");
// const date2 = new Date("2023-07-12");

// const differenceInMilliseconds = date2 - date1;
// let diffDays = differenceInMilliseconds / (1000 * 3600 * 24);
// console.log(Math.abs(diffDays));
// console.log(date1);
