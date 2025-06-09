let a = ["hi", "hello", "hey"];

let res = a.reduce(function (sum, el) {
  if (sum < el.length) {
    return (sum = el.length);
  } else return sum;
}, -Infinity);

console.log(res);
