let word = prompt();

isNaN(word)
  ? console.log(`${word.toLowerCase().trim()} ${word.length}`)
  : console.log("error");
