Array.prototype.myReduce = function (cb, initialAccValue) {
  let reducedVal = initialAccValue;
  for (let i = 0; i < this.length; i++) {
    reducedVal = cb(reducedVal, this[i], i, this);
  }
  return reducedVal;
};

console.log([1, 2, 3, 4, 5].myReduce((acc, item) => acc + item, 0));
