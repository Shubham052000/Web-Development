// primitive values cannot be changed (immutable)

/* 
undefined
null
strings
numbers 
*/

let myString = "ShuBhaM";
myString.toLowerCase();

// objects are mutable (changeable)

let myObject = { name: "Shubham", age: "22" };
myObject.name = "Satyawali";
myObject.firstName = "Shubham";

//array are also mutable

let heroScore = [2, 4, 5, 6, 1];
heroScore[1] = 69;

// objects are called as reference types
// reference is assigned

let arrayRef = [1, 2];

let anotherArrayRef = arrayRef;

anotherArrayRef[0] = 5;

console.log(arrayRef);
console.log(arrayRef === anotherArrayRef);

let yetAnotherArray = Array.from(arrayRef);

console.log(yetAnotherArray === arrayRef);

// *************************************************************************************************

//type conversion
// JS gets what JS wants

console.log(10 + "objects"); //"10objects"
console.log("7" * 4); // 28
let num = 1 - "x"; //Nan
console.log(num + " objects"); //Nan objects
// true gets converted to 1
// false, "" get converted to 0

// forcefull conversion

Number("3");
let infosysStock = 1600.4343;
console.log(infosysStock.toFixed(2));

console.log(Boolean(""));
console.log(Boolean([]));

// while converting objects to primitive values these 3 algos come into play
/* 
1. prefer-string
2. prefer-number
3. No-preference
 */

let colorValue = 14;
let binaryColorValue = colorValue.toString(2); // 2 is knows as radix and it will be used as base for the number conversion
console.log(binaryColorValue);

console.log({ 1: "one" }.toString());
let newDate = new Date(2022, 1, 1);
console.log(newDate.valueOf());

// preferString => toString() => valueOf()
// preferNumber => valueOf() => toString()

console.log("returning", Boolean([].toString()));
