let a = +prompt();
let b = [];
let result = 1;

for (let i = 0; i < a; i++) {
  b.push(prompt());
}

b.forEach(function (el) {
  if (!isNaN(el)) {
    result *= el;
  }
});
console.log(result);
