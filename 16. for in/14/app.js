let array = [1, 2, 3, 1, 2, 2, 1];
let array2 = [];

while (array2.length !== 0) {
  array.forEach(function (el, i, arr) {
    if (array.indexOf(el) !== i) {
      array2.push(el);
    } else null;
  });
  array = [...array2];
  array2 = [];
}
console.log(array.slice(0, 1));
