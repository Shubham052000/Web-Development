//boolean

//true false

let score = 100;

if (score === 100) {
  console.log("great score");
}

//false-y values

/*
undefined
null
0
-0
NaN
""
*/

console.log(typeof false.toString());

//null: special object whose value is "no object"

console.log(typeof null);
console.log(typeof undefined);

/*

undefined is a predefined global constant
null is a language keyword
Both define absence of value
==, === show the difference

*/

//Symbol

String("Shubham");
("Shubham");
let mySym = Symbol("p1"); //21334524362345
let mySym2 = Symbol("p1");

let priority = Symbol.for("p2");
let priority2 = Symbol.for("p2"); //both will be equal when used for

console.log(mySym === mySym2); //returns false

const WIN = Symbol("WINDOW");
const AISLE = "AISLE";
const MID = "MID";

const crew = "WINDOW";

function getSeat(getValue) {
  switch (getValue) {
    case WIN:
      return "SEAT is alloted";
    case AISLE:
      return "SEAT is alloted";
    case MID:
      return "SEAT is alloted";
    default:
      console.log("No seat alloted");
  }
}

console.log(getSeat(crew));

//react
//card, card;

//Global Object
/*
constants like: undefined, NaN
fuctions like: isNaN(), parseInt(), eval()
constructor like: Date(), String(), Object()
Math, JSON
*/

// these are not reserved keywords, null is a reserved keyword.

// global object keyword should be treated as reserved

// Node Global and Browser Global

// node: global
// browser: window

console.log(this);

//ES2020 globalThis

console.log(globalThis);
