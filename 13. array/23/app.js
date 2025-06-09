let a = [];

while (a.length < 10) {
  a.push(Math.sqrt(prompt()));
}
for (let el of a) {
  Number.isInteger(el) ? console.log(el) : null;
}
