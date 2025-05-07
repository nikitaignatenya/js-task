let a = prompt();

a = a.split("");
let result = "";

for (let i = 0; i < a.length; i++) {
  result += a[i] + " ";
}

console.log(result);
