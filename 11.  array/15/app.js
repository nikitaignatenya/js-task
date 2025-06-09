let a = [1, "привет", true, "мир", 42];
let b = [];

for (let i = 0; i < a.length; i++) {
  isNaN(a[i]) ? b.push(a[i]) : null;
}

console.log(b);
