function makeMultiplier(x) {
  return function () {
    return +prompt("Умножаемое") * x;
  };
}
const res = makeMultiplier(+prompt("Умножитель"));
console.log(res());
