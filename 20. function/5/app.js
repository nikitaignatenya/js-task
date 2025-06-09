function checkNum(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  console.log(arr);

  const res = arr.every(function (el) {
    if (!isNaN(el)) return true;
    else return false;
  });
  console.log(res);
}

checkNum([]);
