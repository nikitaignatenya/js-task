let num = +prompt();
let array = [];
const fillArray = (arr) => {
  for (let i = 0; i < num; i++) {
    arr.push(prompt());
  }
  return arr;
};
const checkNum = (arr) => arr.every((el) => (!isNaN(el) ? true : false));
const returnNum = (vl, arr) => {
  const resArr = [];
  if (vl == true) {
    arr.forEach((el) => (el % 2 == 0 ? resArr.push(el ** 2) : null));
    return resArr;
  } else return "Error";
};

const firstRes = fillArray(array);
const secRes = checkNum(firstRes);
const thirdRes = returnNum(secRes, firstRes);

console.log(thirdRes);
