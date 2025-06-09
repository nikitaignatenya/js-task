function checkNum(n, arr) {
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

const res = checkNum(+prompt(), []);
console.log(res);
