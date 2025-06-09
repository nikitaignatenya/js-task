const checkSum = (arr, num) => {
  const sumNum = arr.filter((el) => {
    const toStr = String(el).split("");
    console.log(toStr);

    const res = toStr.reduce((sum, el) => (sum += +el), 0);
    if (res > num) return true;
    else return false;
  });
  return sumNum;
};

const firstFunctionRes = checkSum([12, 49, 123, 88, 305], 10);

console.log(firstFunctionRes);
