function longWordsUpper(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  const arrFilterLength = arr.filter(function (el) {
    if (el.length > 3) return true;
    else return false;
  });
  const res = arrFilterLength.map(function (el) {
    return el.toUpperCase();
  });
  console.log(res);
}

longWordsUpper([]);
