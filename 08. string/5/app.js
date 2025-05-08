let word = prompt().trim();

(word.includes("@") && word.endsWith(".com")) || word.endsWith(".ru")
  ? console.log(true)
  : console.log(false);
