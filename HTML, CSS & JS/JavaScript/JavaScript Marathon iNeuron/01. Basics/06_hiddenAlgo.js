10 + " mangoes"; // "10 mangoes"
"7" * "4"; //28

Number("3"); //3
Number("3x"); //Nan
Number([99]); //1
Number([99, 88]); //Nan

//objects to primitive value
/*
1. prefer-string
2. prefer-number
3. no-preference
*/

//toString() || valueOf()

let colorValue = 14;
let binaryColorValue = colorValue.toString(2);
console.log(binaryColorValue);

console.log({ 1: "one" }.toString());

let newDate = new Date(2022, 3, 4);
console.log(newDate.toString().valueOf());
console.log(newDate.valueOf());
