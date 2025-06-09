let a = +prompt();
let b = [];

for (let i = 0; i < a; i++) {
  b.push(+prompt());
}
if (a == 0) {
  console.log("Массив пуст");
} else {
  let c = [];
  b.forEach(function (el) {
    if (!c.includes(el)) {
      c.push(el);
    }
  });
  console.log(c);
}
