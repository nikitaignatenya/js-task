function maxNum(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.reduce((sum, el) => (el > sum ? el : sum), -Infinity);
  console.log(res);
}
maxNum([]);
