(function (arr, num) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.filter((el) => (el > num ? true : false));
  console.log(res.length);
})([], prompt());
