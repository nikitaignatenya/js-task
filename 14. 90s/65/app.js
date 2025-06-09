let a = [];

while (a.length < 1) {
  a.push(prompt());
}

const b = a.map(function (el) {
  if (el % 2 == 0) return "чётное";
  else return "нечётное";
});

console.log(b);
