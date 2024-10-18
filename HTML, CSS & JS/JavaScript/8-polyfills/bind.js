/* 
const returnedFunction = purchaseCar.bind(car)
*/

const car = {
  color: "Silver",
  company: "BMW",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }
  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const returnedFunction = purchaseCar.myBind(car, "Rs. ", 500000000);
returnedFunction();

const returnedFunction2 = purchaseCar.myBind(car);

returnedFunction2("Rs. ", 500000000);
