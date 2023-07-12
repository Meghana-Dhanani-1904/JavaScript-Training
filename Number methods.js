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
