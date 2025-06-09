let a = "hello".split("");
let b = [];

for (let i = 0; i < a.length; i++) {
  if (!b.includes(a[i])) {
    b.push(a[i]);
  }
}
console.log(b);
