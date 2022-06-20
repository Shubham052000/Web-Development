//'', "" and `` strings are same

let dollar = "$";
let love = "❤";

// console.log(dollar.length);
// console.log(love.length);

//escape sequence

//\n, \u, \'

let myString = "hello, shubham";

console.log(myString.substring(1, 4));
myString.slice(1, 4);
console.log(myString.slice(-7));

myString.indexOf("u");
myString.indexOf("h", 3); //will find the index of e after index 3
myString.lastIndexOf("h");

myString.startsWith("+91"); //whether the string starts with +91 or not
myString.endsWith("@proton.me");
myString.includes("test");

myString.toLowerCase();
myString.toUpperCase();
myString.normalize();

console.log("HDFC334433".padStart(12, "0"));

console.log("*".repeat(10)); //returns you a new string

let score = 100;

let greeting = `\
${dollar} is at 
value of ${score}
\u2718
`;
console.log(greeting);

let myNewString = String.raw`\u2718`.length;

console.log(myNewString);
