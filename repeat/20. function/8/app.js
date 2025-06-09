function sumElements(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  const checkString = arr.every(function (el) {
    if (isNaN(el)) return true;
    else return false;
  });
  const res = arr.reduce(function (sum, el) {
    if (checkString == true) return (sum += el);
    else return (sum += +el);
  }, 0);
  if (typeof res == "number") console.log(res);
  else console.log(res.slice(1, res.length));
}

sumElements([]);
