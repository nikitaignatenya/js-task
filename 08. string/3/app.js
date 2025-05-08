let word = prompt();

word !== null
  ? console.log(word.replaceAll("@", ""))
  : console.log("Некорректен");
