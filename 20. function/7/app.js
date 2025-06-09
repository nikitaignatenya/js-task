function pushArr(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.every(function (el) {
    if (!isNaN(el)) return true;
    else return false;
  });
  return res;
}

function doSum(arr) {
  const res2 = arr.reduce(function (sum, el) {
    return (sum += el);
  }, 0);
  console.log(res2);
}
let array = [];
const checkNumber = pushArr(array);
if (checkNumber == true) {
  doSum(array);
}
