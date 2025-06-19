((arr) => {
  let arrat = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrat.push(arr[i]);
  }
  console.log(arrat);
})(["один", "два", "три"]);
