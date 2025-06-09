let a = [];
let b = +prompt("Количество значений");
let c = [];
while (a.length < b) {
  a.push(+prompt("Числа"));
}

c.push(+prompt("Доп"));

function res(f, ...v) {
  console.log([f, ...v]);
}
res(...c, ...a);

console.log([...c, ...a]);
