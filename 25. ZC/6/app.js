function devideBy(x) {
  return function (y) {
    console.log(y / x);
  };
}
devideBy(4)(2);
