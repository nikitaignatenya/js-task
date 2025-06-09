let a = ["apple", "banana", "avocado", "kiwi"];
let b = 0;

for (let i = 0; i < a.length; i++) {
  a[i].startsWith("a") ? (b += 1) : null;
}
console.log(b);
