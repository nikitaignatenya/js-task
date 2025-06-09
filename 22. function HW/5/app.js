const retStr = (number) =>
    number % 2 == 0 ? `Число ${number} чётное` : `Число ${number} нечётное`,
  res = retStr(+prompt());
console.log(res);
