function sumPositive(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const arrFiltered = arr.filter(function (el) {
    if (el > 0) {
      return true;
    } else return false;
  });
  const res = arrFiltered.reduce(function (sum, el) {
    return (sum += el);
  }, 0);
  console.log(res);
}

sumPositive([]);
