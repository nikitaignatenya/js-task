let a = prompt().split("");

const b = a.every(function (el) {
  if (!isNaN(el)) return true;
  else return false;
});

console.log(b);
