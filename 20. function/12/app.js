function checkNum(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  return arr;
}
const checkRes = (arr) => arr.every((el) => (!isNaN(el) ? true : false));
function secondValue(vl, arr) {
  if (vl == true) {
    const findMax = arr.reduce(
      (max, el) => (el > max ? (max = el) : max),
      -Infinity
    );
    return findMax;
  }
}

const array = [];
const resultOne = checkNum(array);
const resultTwo = checkRes(resultOne);
const resultThree = secondValue(resultTwo, resultOne);
console.log(resultThree);
