const fillArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.push(prompt());
  }
  return arr;
};
const checkEveryNum = (arr) => arr.every((el) => (!isNaN(el) ? true : false));
const filterArray = (arr, vl) =>
  vl == true
    ? arr.filter((el) => (el % 2 == 0 ? true : false)).map((el) => el ** 2)
    : null;

const firstRes = fillArray([], +prompt());
const secRes = checkEveryNum(firstRes);
const thirdRes = filterArray(firstRes, secRes);
console.log(thirdRes);
