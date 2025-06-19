((n, arr) => {
  for (let i = 0; i <= n; i++) {
    i % 2 == 0 ? arr.push(i) : null;
  }
  console.log(arr);
})(+prompt(), []);
