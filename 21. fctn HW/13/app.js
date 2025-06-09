function printItems(arr) {
  for (let i = 0; i < 5; i++) {
    arr.push(prompt());
  }
  arr.forEach(function (el) {
    console.log(el);
  });
}

printItems([]);
