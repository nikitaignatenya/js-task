let n = prompt();
n = n.split("");

result = 0;

for (let i = 0; i < n.length; i++) {
  !isNaN(+n[i]) && +n[i] % 2 == 0 ? (result += +n[i]) : result != +n[i];
}

console.log(+result);
