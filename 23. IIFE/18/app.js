((str, arr) => {
  const strToArr = str.toLowerCase().split("");
  const strFilter = strToArr.filter((el) => {
    if (arr.includes(el)) return true;
    else return false;
  });
  console.log(strFilter);
})(prompt(), ["a", "e", "i", "o", "u"]);
