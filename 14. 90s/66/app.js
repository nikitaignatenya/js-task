let a = "banana".split("");
let b = [];

for (let i = 0; i < a.length; i++) {
  !b.includes(a[i]) ? b.push(a[i]) : null;
}

console.log(b.join(""));
