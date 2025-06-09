const checkStr = (arr) => {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  const res = arr.filter((el) =>
    el.length == 3 || el.length == 4 ? true : false
  );
  console.log(res.length);
};

checkStr([]);
