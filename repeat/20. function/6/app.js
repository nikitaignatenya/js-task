function doArray(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.push(prompt());
  }
}
const fullArray = [];
doArray(fullArray, +prompt());

function arrLength(arr) {
  console.log(arr.length);
}
arrLength(fullArray);
