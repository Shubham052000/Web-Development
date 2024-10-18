// remember putting the value as a function not as an arrow function because of this's reference

Array.prototype.myMap = function (cb) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(cb(this[i], i, this));
  }
  return mappedArray;
};

console.log([1, 2, 3].myMap((item) => item * 2));
