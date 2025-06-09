function array(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(+prompt());
  }
  const res = arr.filter((el) => (el % 2 == 0 ? true : false));
  console.log(...res);
}

array([]);
