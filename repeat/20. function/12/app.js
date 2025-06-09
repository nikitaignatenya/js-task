const fillArr = (arr, num) => {
  for (let i = 0; i < num; i++) {
    arr.push(prompt());
  }
  return arr;
};
const checkNum = (arr) => arr.every((el) => (!isNaN(el) ? true : false));
const findMax = (arr, vl) =>
  arr.reduce(
    (max, el) => (vl == true ? (el > max ? (max = el) : max) : null),
    -Infinity
  );

let array = [];
const firstRes = fillArr(array, +prompt());
const secRes = checkNum(firstRes);
const thirdRes = findMax(firstRes, secRes);

console.log(thirdRes);
