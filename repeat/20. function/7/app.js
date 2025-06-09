function checkNumber(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }

  const orNum = arr.every(function (el) {
    if (!isNaN(el)) return true;
    else return false;
  });
  const res = arr.reduce(function (sum, el) {
    if (orNum === true) return (sum += +el);
  }, 0);
  console.log(res);
}

checkNumber([]);
