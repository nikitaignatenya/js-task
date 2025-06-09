let a = ["apple", 3, "orange", 2];
let b = [];

for (let i = 0; i < a.length; i++) {
  if (isNaN(a[i])) {
    continue;
  } else {
    b.push(a[i]);
  }
}

console.log(b);
