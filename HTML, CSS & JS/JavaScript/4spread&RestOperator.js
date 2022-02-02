//Spread {...} is used to split up array elements OR object properties
//Rest {...} is used to merge a list of function arguments into an array

const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];

console.log(newNumbers);

const person = {
  name: "Shubham",
};

const newPerson = {
  ...person,
  age: 22,
};

console.log(newPerson);

//Rest
const filter = (...args) => {
  console.log(args.filter((el) => el === 1));
//   return args.filter((el) => el === 1);
};
filter(1, 2, 3);
// console.log(filter(1, 2, 3));
