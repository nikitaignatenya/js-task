const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];
let sum = 0;
const isValid = function () {
  try {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) throw new Error("Не число");
      if (!Number.isInteger(arr[i])) throw new Error("Не целое число");
      if (arr[i] === 0) break;
      sum += arr[i];
    }
    console.log(sum);
  } catch (error) {
    console.log(error);
  }
};
isValid();
