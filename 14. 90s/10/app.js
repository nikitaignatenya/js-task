let a = [];

while (a.length < 5) {
  a.push(+prompt());
}

const show = a.every(function (el) {
  if (el > 0) return true;
  else return false;
});

console.log(show);
