const fillArr = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.push(prompt());
  }
  return arr;
};
const checkNum = (arr) => arr.every((el) => (!isNaN(el) ? true : false));
const prodNum = (arr, vl) =>
  arr.reduce((sum, el) => (vl == true ? (sum *= el) : "Не число"), 1);

let num = prompt();
const firstRes = fillArr([], num);
const secRes = checkNum(firstRes);
const thirdRes = prodNum(firstRes, secRes);
console.log(thirdRes);
