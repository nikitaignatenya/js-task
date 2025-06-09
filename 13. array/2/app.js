let a = [2, 3, 4, 5, 6];
let c = [4, 5];

const deleteLast = a.filter(function (el) {
  if (!isNaN(el) && el !== c[0] && el !== c[1]) {
    return true;
  } else {
    return false;
  }
});
if (deleteLast.length == 0) {
  console.log("Массив пуст");
} else {
  console.log(deleteLast);
}
