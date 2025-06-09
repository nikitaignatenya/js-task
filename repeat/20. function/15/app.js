const strToUpLow = (str) =>
  str
    .split("")
    .map((el, i) => (i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()));

const res = strToUpLow(prompt());

console.log(res);
