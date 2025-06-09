let array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let sum = 0;
(function (arr, s) {
  for (let i = 0; i < arr.length; i++) {
    for (let l = 0; l < arr[i].length; l++) {
      s += arr[i][l];
    }
  }
  console.log(s);
})(array, sum);
