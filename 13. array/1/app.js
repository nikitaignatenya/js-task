let a = [];
let b = [];

for (let i = 0; i < 5; i++) {
  a.push(prompt());
  if (!isNaN(a[i])) {
    b.push(a[i]);
  } else if (b.length === 0) {
    b.push("Массив пуст");
  } else {
    null;
  }
}

console.log(b);
