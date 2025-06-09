let i = 11;
let result = "";

while (i <= 33) {
  result += `${i} `;
  i++;
}

result = result.split(" ");
result = result.slice(0, result.length - 1);
console.log(result);
