function greaterThan(x) {
  return function (y) {
    return y > x ? true : false;
  };
}

const res = greaterThan(4)(2);
console.log(res);
