let a = prompt();
a = a.split(" ");
let result = "";

for (let i = 0; i < a.length; i++) {
  result += `${a[i][0].toLowerCase()}${a[i].slice(1).toUpperCase()} `;
}
console.log(result);
