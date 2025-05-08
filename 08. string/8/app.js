let word = prompt();

word.includes("http://") || word.includes("https://")
  ? console.log(true)
  : console.log(false);
