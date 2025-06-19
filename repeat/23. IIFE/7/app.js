((arr) => {
  const res = arr.reduce((sum, el) => (el > 0 ? (sum += el) : sum), 0);
  console.log(res);
})([-2, 5, 3, -1, 0, 4]);
