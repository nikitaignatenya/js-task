let a = +prompt("Количество значений");
let arr = [];
let b = [];
let c = [];

for (let i = 0; i < a; i++) {
  arr.push(prompt("Значение"));
}

arr.forEach(function (el) {
  if (!isNaN(el)) {
    b.push(el);
  } else {
    c.push(el);
  }
});

console.log(b);
console.log(c);
