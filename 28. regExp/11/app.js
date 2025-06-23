let arr = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];
function check() {
  try {
    const res = arr.every((el) => {
      if (typeof el !== "number") throw new Error("В массиве есть числа");
    });
    arr.forEach((el) => {
      !newArr.includes(el) ? newArr.push(el) : null;
    });
    console.log(newArr);
  } catch (error) {
    console.log(error);
  }
}
check();
