function joinWords(words, res) {
  for (let i = 0; i < 5; i++) {
    words.push(prompt());
  }
  words.forEach(function (el) {
    res += ` ${el}`;
  });
  console.log(res);
}
joinWords([], "");
