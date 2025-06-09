const checkNum = (arr, num) => {
  for (let i = 0; i < num; i++) {
    arr.push(prompt());
  }
  const filterNum = arr.filter((el) => (el % 2 == 0 ? true : false));
  ((arr) => console.log(arr.length))(filterNum);
};

checkNum([], +prompt());
