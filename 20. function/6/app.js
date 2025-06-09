function pushArr(arr) {
  let num = +prompt();
  for (let i = 0; i < num; i++) {
    arr.push(prompt());
  }
  console.log(arr);
  function checkArr(l) {
    console.log(l.length);
  }
  checkArr(arr);
}

pushArr([]);
