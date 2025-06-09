let obj = { volume: 80, theme: "dark", notifications: true };
let num = 0;
for (const key in obj) {
  num++;
}

console.log(num);
