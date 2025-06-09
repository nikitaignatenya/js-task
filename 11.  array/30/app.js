let a = [];
let b = 0;
let c = "";

for (let i = 0; i < Infinity; i++) {
  a.push(prompt("Введите любое количесвто чисел, в конце stop"));
  if (a[i] == "stop") {
    break;
  }
}
a = a.slice(0, a.length - 1);
for (let j = 0; j < a.length; j++) {
  b += +a[j];
}
for (let l = 0; l < a.length; l++) {
  +a[l] > b / a.length ? (c += `${a[l]} `) : null;
}
console.log(c);
console.log(a);
