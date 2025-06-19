((arr, allSum) => {
  arr.forEach((el) => {
    const sumEl = el.reduce((sum, el) => (sum += +el), 0);
    allSum += sumEl;
  });
  console.log(allSum);
})(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  0
);
