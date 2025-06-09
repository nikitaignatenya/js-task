function chekPal(arr) {
  const res = arr.filter((el) => {
    const toStr = String(el).split("").reverse().join("");
    return toStr == String(el);
  });
  return res;
}

const first = chekPal([121, 202, 345, 11, 99]);
console.log(first);
