function isDivisibleBy(a) {
  return function (b) {
    return b % a == 0 ? true : false;
  };
}

const res = isDivisibleBy(4)(8);
console.log(res);
