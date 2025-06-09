const checkNum = (arr) => {
  const res = arr.every((el) => (el > 0 ? true : false));
  console.log(res);
};

checkNum([1, -2, 3]);
