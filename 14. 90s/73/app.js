let a = [1, 2, 3];
const res = a.map(function (el) {
  return (el = `${el}.`);
});

console.log(res.join(" "));
