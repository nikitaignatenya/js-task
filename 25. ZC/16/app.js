function rememberNumber(n) {
  return function () {
    console.log(n);
  };
}

const res = rememberNumber("Hi");
res();
res();
res();
res();
res();
