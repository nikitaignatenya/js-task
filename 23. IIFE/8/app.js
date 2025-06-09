(function (arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const filter = arr.filter((el) => (el > 0 ? true : false));
  const res = filter.reduce((sum, el) => sum + el, 0);
  console.log(res);
})([]);
