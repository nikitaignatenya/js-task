let word = prompt();

word = word.split(" ");
word == 2
  ? console.log(
      word[0][0].toLowerCase() +
        word[0].slice(1) +
        " " +
        word[1][0].toLowerCase() +
        word[1].slice(1)
    )
  : console.log(
      word[0][0].toLowerCase() +
        word[0].slice(1) +
        " " +
        word[1][0].toLowerCase() +
        word[1].slice(1) +
        " " +
        word[2][0].toLowerCase() +
        word[2].slice(1)
    );
