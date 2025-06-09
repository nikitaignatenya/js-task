function toUpperCase(words) {
  for (let i = 0; i < 5; i++) {
    words.push(prompt());
  }
  const res = words.map(function (el) {
    return el.toUpperCase();
  });
  console.log(res);
}

toUpperCase([]);
