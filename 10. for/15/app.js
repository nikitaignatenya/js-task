let word = prompt();
word = word.split(" ");
let result = "";

for (let i = 0; i < word.length; i++) {
  result += ` ${word[i][0].toUpperCase() + word[i].slice(1)} `;
}
console.log(result);
