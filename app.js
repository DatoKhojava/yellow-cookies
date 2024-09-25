function myFilter(callback, obj) {
  // check on error
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} isnt a function! plase pass a function`);
  }

  const res = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(obj, this[i], i, this)) {
        res.push(this[i]);
      }
    }
  }

  return res;
}

Array.prototype.myFilter = myFilter;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.myFilter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
