function createCounter(i) {
  return function () {
    console.log(i++);
  };
}

const res = createCounter(0);
res();
res();
res();
res();
