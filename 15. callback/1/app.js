let a = [];
for (let i = 0; i < 5; i++) {
  a.push(prompt());
}

let b = [];
for (let i = 0; i < a.length; i++) {
  if (!isNaN(a[i])) {
    b.push(a[i]);
  } else continue;
}

if (b.length == 0) {
  b = "Массив пуст";
} else {
  b = b;
}
console.log(b);
