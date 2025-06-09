let a = ["солнце", "луна", "звезда", "небо"];
let b = 0;

for (let i = 0; i < a.length; i++) {
  a[i].length > b ? (b = a[i].length) : null;
}

console.log(b);
