function dofuctorial(arr, num) {
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr.join("*");
}
const res = dofuctorial([], +prompt());

console.log(res);
