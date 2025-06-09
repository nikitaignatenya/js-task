function getArr(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  const res = arr.filter(function (el) {
    if (el.length <= 2) return true;
    else return false;
  });
  console.log(res);
}
getArr([]);
