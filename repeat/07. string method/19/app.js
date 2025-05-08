let a = prompt();
a = a.split(" ");
let result = "";

for (let i = 0; i < a.length; i++) {
  a[i][0] == a[i][0].toUpperCase() ? (result = true) : (result = false);
}
console.log(result);
