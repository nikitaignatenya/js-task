const ret = (a, b) =>
    a > b ? `Число ${a} больше числа ${b}` : `Число ${b} больше числа ${a}`,
  res = ret(+prompt(), +prompt());
console.log(res);
