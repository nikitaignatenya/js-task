function checkNum(n, arr) {
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  console.log(arr);
}

checkNum(+prompt(), []);
