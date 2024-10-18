/* 
purchaseCar.apply(car, ["Rs. ", 1000000000])
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

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error(args + " is not an array");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car, ["Rs. ", 1000000000]);
