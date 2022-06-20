//integer literals

/* 0;
100;
0xff => 255
0b, 0B */

//floating point literals

/* 1.9
3.14 

3.03e23 => 3.03 * 10 to the power 23

let billion = 1_000_000_000 (this thing is not yet formally standardized as of now)*/

//Arithmetic
// +, -, *, /, %, ** (raise to the power)
/* console.log(2 + 2);  */

Math.pow(2, 9);
Math.pow(3, 1 / 3);
Math.round(0.6);
Math.ceil(0.6);
Math.floor(0.6);
Math.abs(-5);
Math.min(2, 3, 5, 8, 4);
Math.max(2, 3, 7, 9, 1, 4);
Math.random();

//ES6 new methods were introduced
Math.cbrt(27); //Cube-root
Math.hypot(3, 4); //to find out the hypotenuse
console.log(Math.clz32(0xf)); //returns the number of leading zero bits in the 32bit binary representation of number

// Infinity, no errors; just Infinity
// divide by 0; not an error ; it's just NaN

console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.isNaN(2));
// console.log(Number.isNaN("3a"));
// console.log(Number.parseInt("3a"));

let statementOne = 0.3 - 0.2;
let statementTwo = 0.2 - 0.1;

// console.log(statementOne === statementTwo);
// console.log(statementOne === 0.1);
// console.log(statementTwo === 0.1);
// console.log(0.3 - 0.2); => 0.09999999999999998
// console.log(0.2 - 0.1);

let googol = "1" + "0".repeat(100);
console.log(BigInt(googol));
