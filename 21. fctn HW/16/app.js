function sumAll(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.reduce(function (sum, el) {
    return (sum += el);
  }, 0);
  console.log(res);
}

sumAll([]);
