function doubeNumber(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.map(function (el) {
    return el * 2;
  });
  console.log(res);
}

doubeNumber([]);
