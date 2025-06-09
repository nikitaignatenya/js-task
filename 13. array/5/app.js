let a = +prompt();
let b = [];

for (let i = 0; i < a; i++) {
  b.push(prompt());
}

const chooseNumber = b.some(function (el) {
  if (!isNaN(el)) {
    return true;
  } else {
    return false;
  }
});
console.log(chooseNumber);
