let word = prompt();

console.log(
  word.slice(0, word.indexOf("b")) + word.slice(word.lastIndexOf("b") + 1)
);
