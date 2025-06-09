function doStringToUpperCase(a) {
  let num = +prompt("Введите количество слов");
  for (let i = 0; i < num; i++) {
    a.push(prompt("Слово"));
  }
  const res = a.map(function (el, i) {
    if ((i + 1) % 2 == 0) {
      return el.toUpperCase();
    } else return el.toLowerCase();
  });
  console.log(res);
}

doStringToUpperCase([]);
