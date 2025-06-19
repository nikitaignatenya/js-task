function multiply(a) {
  return function (b) {
    return function (c) {
      console.log(a * b * c);
    };
  };
}
multiply(3)(4)(1);
