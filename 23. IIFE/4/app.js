(function (arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.reduce((sum, el) => sum + el, 0);
  console.log(res / arr.length);
})([]);
