let word = prompt();
let symbol = prompt();

word.includes(symbol)
  ? console.log(word.indexOf(symbol))
  : console.log("Символ не найден");
