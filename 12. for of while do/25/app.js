let a = ["apple", "banana", "kiwi"];
let b = "";

for (let el of a) {
  b += el + ` - ${el.length} букв;  `;
}

console.log(b);
