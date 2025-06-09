function isNumberString(str, sum) {
  for (let i = 0; i < 5; i++) {
    str.push(prompt());
  }
  const strArrayMap = str.map(function (el) {
    return [el];
  });
  for (let i = 0; i < strArrayMap.length; i++) {
    const strEveryNum = strArrayMap[i].every(function (el) {
      if (!isNaN(el)) return true;
      return false;
    });
    if (strEveryNum == true) {
      sum += Number(strArrayMap[i]);
    } else {
      continue;
    }
  }
  console.log(sum);
}
isNumberString([], 0);
