let array = [5, [6, [7, [8]]]];
let newArray = [];
function sumEl() {
  const check = array.every((el) => (typeof el == "number" ? true : false));
  if (check == true) {
    return array.reduce((sum, el) => (sum += el), 0);
  }
  array.forEach((el) =>
    typeof el == "number" ? newArray.push(+el) : newArray.push(...el)
  );
  array = newArray;
  newArray = [];
  return sumEl();
}

const res = sumEl();
console.log(res);
