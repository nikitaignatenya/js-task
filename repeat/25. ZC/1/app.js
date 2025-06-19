function rememberNumber(n) {
  return function () {
    console.log(n);
  };
}

const res = rememberNumber(+prompt());
res();
res();
res();
res();
