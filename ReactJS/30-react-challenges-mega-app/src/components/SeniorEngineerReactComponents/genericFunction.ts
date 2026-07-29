const genericIdentityFunction = <T>(a: T): T => {
  return a;
};

// these methods won't be possible if types weren't preserved
console.log(genericIdentityFunction(1.345).toFixed(2));
console.log(genericIdentityFunction("Shubham").concat(" Satyawali"));

const genericArrayFunction = <T>(arr: T[]): T | undefined => {
  return arr[0];
};

console.log(genericArrayFunction(["A", 1, 2, 3, "B", [1, 2, 3]]));
