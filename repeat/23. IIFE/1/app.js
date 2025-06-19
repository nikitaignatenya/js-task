(function arrayCheck(arr) {
  const res = arr.map((el) => (el = Math.max(...arr) - Math.min(...arr)));
  console.log(res);
})([10, 2, 5, 3, 7]);
