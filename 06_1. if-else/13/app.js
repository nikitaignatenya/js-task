let word = prompt();

isNaN(word) && word !== null
  ? console.log(word[word.length - 1])
  : console.log("Неверное значение");
