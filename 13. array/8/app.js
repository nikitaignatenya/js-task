let a = +prompt();
let b = [];

for (let i = 0; i < a; i++) {
  b.push(prompt());
}

const orNum = b.map(function (el) {
  if (+el % 2 == 0) {
    return "чёт";
  } else {
    return "нечёт";
  }
});

console.log(orNum);
