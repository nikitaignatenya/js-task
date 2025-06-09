function doCase(string) {
  string = string.split(" ");
  const res = string.map(function (el) {
    return el[0].toUpperCase() + el;
  });
  console.log(...res);
}

doCase(prompt());
