const checkNum = (arr, p, o) => {
  for (let i = 0; i < 6; i++) {
    arr.push(+prompt());
  }
  arr.forEach((el) => (el > 0 ? (p += 1) : (o += 1)));
  console.log(p);
  console.log(o);
};
checkNum([], 0, 0);
