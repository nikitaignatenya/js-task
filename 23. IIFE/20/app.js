((arr, obj) => {
  obj.max = Math.max(...arr);
  obj.min = Math.min(...arr);
  console.log(obj);
})([10, 5, 20, 3, 8], Object());
