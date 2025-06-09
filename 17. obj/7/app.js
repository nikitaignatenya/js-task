let obj = { a: 1 };
num = 0;
for (let key in obj) {
  num++;
}

if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}
