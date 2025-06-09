function name(...sum) {
  console.log(sum);
  const res = sum.map(function (el) {
    return el.toUpperCase();
  });
  console.log(res);
}

name("apple", "banana", "cherry");
