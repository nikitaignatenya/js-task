let a = +prompt();
let b = [];
let result = 0;

for (let i = 0; i < a; i++) {
  b.push(prompt());
}

b.forEach(function (el) {
  if (!isNaN(el)) {
    result += +el;
  } else {
    null;
  }
});
console.log(result);
