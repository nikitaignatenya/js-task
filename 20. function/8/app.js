function concatenation(arr1) {
  for (let i = 0; i < 5; i++) {
    arr1.push(prompt());
  }
}
let array = [];
const fullArray = concatenation(array);

function checkArr(arr) {
  const checkArrEvery = arr.every(function (el) {
    if (isNaN(el)) return true;
    else return false;
  });
  function doSum(arr2) {
    if (checkArrEvery == true) {
      const findSum = arr2.reduce(function (sum, el) {
        return (sum += el);
      }, "");
      return findSum;
    }
  }
  const res = doSum(arr);
  console.log(res);
}

checkArr(array);
