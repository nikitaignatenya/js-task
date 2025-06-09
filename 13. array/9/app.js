let a = +prompt();
let b = [];

for (let i = 0; i < a; i++) {
  b.push(prompt());
}

const addString = b.filter(function (el) {
  if (el[0] === "a" || el[0] === "h") {
    return true;
  } else {
    return false;
  }
});

console.log(addString);
