let a = ["кот", "дом", "окно", "лист"];
let b = [];

for (let i = 0; i < a.length; i++) {
  a[i].length > 3 ? b.push(a[i]) : null;
}

console.log(b);
