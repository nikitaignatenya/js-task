let word = prompt().trim();

isNaN(word)
  ? console.log(word[0].toUpperCase() + word.slice(1).toLowerCase())
  : console.log("error");
