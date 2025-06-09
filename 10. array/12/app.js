let a = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let result = [];

for (let i = 0; i < a.length; i++) {
  !result.includes(a[i]) ? result.push(a[i]) : null;
}
console.log(result);
