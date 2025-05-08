let a = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресеьне",
];
let result = "";
let n = +prompt();

for (let i = 1; i <= 7; i++) {
  switch (n) {
    case i:
      result = a[i - 1];
      break;
  }
}

console.log(result);

let result2 = "";

for (let i = 1; i <= 7; i++) {
  n == i ? (result2 = a[i - 1]) : result != a[i - 1];
}

console.log(result2);
