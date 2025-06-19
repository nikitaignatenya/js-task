function checkEven(label) {
  return function (number) {
    return number % 2 === 0 ? `${label}: true` : `${label}: false`;
  };
}
const res = checkEven("Result")(5);
console.log(res);
