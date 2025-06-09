let a = +prompt();
let b = [];

for (let i = 0; i < a; i++) {
  b.push(prompt());
}

const orNumber = b.every(function (el) {
  if (!isNaN(el)) {
    return true;
  } else {
    return false;
  }
});

console.log(orNumber);
