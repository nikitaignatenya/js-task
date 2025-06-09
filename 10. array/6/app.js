let a = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < a.length; i++) {
  a[i] % 3 == 0 || a[i] % 5 == 0 ? a.pop(a[i]) : null;
}

console.log(a);
