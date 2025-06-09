let a = prompt();
let b = "aeiouAEIOU";
let res = 0;

for (let i = 0; i < a.length; i++) {
  b.includes(a[i]) ? (res += 1) : null;
}
console.log(res);
