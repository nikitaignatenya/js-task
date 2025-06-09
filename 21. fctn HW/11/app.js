function count_vowels(s, arr) {
  s = s.split("");
  console.log(s);
  console.log(arr);

  const res = s.filter(function (el) {
    if (arr.includes(el)) return true;
    else return false;
  });
  console.log(res);
}

count_vowels(prompt(), ["а", "о", "у", "ы", "э", "я", "ю", "е", "ё", "и"]);
