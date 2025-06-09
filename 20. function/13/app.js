let num = +prompt();
let array = [];

const fullingArray = (arr) => {
  for (let i = 0; i < num; i++) {
    arr.push(prompt());
  }
  return arr;
};
const checkNum = (arr) => arr.every((el) => (!isNaN(el) ? true : false));

const findSum = (arr) => arr.reduce((sum, el) => (sum *= el), 1);

const firstFunctRes = fullingArray(array);
const secondFunctRes = checkNum(firstFunctRes);
const thirdFunctRes = findSum(firstFunctRes);

console.log(thirdFunctRes);
