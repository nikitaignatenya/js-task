(function (arr) {
  for (let i = 0; i < 3; i++) {
    arr.push(prompt());
  }
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  console.log(array);
})([]);
