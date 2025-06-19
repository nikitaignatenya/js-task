function inRange(min) {
  return function (max) {
    return function (value) {
      return value <= max && value >= min ? true : false;
    };
  };
}
const res = inRange(3)(10)(6);
console.log(res);
