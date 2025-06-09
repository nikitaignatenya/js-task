const res = (arr, res) => (res = Math.max(...arr) - Math.min(...arr));

const first = res([10, 2, 5, 3, 7], 0);
console.log(first);
