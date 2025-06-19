((arr, n) => {
  const res = arr.filter((el) => {
    const num = String(el).split("");
    const red = num.reduce((sum, el) => (sum += +el), 0);
    return red > n;
  });
  return console.log(res);
})([12, 49, 123, 88, 305], 10);
