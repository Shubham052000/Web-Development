/* 
purchaseCar.call(car, "Rs. ", 1000000000)
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

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car, "Rs. ", 1000000000);
