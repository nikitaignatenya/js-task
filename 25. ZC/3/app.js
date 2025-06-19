function makeMultiplier(x) {
  return function (n) {
    console.log(x * n);
  };
}

const res = makeMultiplier(2);
res(4);
res(3);
res(2);
