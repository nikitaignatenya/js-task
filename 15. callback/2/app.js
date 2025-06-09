let a = [];
let i = 0;
while (i < 5) {
  a.push(prompt());
  i++;
}

let b = [];
for (let i = 0; i < 2; i++) {
  b.push(prompt());
}

const res = a.filter(function (el) {
  if (el !== b[0] && el !== b[1]) return true;
  else return false;
});

if (res.length == 0) {
  console.log("Массив пуст");
} else {
  console.log(res);
}
