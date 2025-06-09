let obj = { math: 90, english: 85, biology: 78 };
let num = 0;

for (const key in obj) {
  num += obj[key];
}

console.log(num);
