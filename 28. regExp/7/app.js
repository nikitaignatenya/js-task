function findIndexMax(arr) {
  try {
    if (arr.length == 0) throw new Error("Массив пуст");
  } catch (error) {
    console.log(error);
  }
  try {
    let max = 0;
    arr.forEach((el) => {
      el > max ? (max = el) : max;
    });
    const res = arr.reduce(
      (indexMax, el) => (el == max ? (indexMax = arr.indexOf(el)) : indexMax),
      0
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

findIndexMax([1, 3, 7, 7, 5]);
