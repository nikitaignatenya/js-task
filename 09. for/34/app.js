let a = prompt();
let result = 0;

for (let i = 0; i < a.length; i++) {
  a[i] !== " " ? (result += 1) : result != 0;
}

console.log(result);
