function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}

sum(2)(3);
