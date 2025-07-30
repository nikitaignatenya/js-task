// 11. Создай класс WordExtractor, метод get_words(text) возвращает уникальные слова из текста.
// Пример: "hi hello hi" → ["hi", "hello"].
// Создай наследника WordLengths, метод get_words(text) возвращает список длин этих слов.
// Пример: [2, 5].

class WordExtractor {
  arr = [];
  get_words(text) {
    console.log(text.split(" "));

    text.split(" ").forEach((el) => {
      !this.arr.includes(el) ? this.arr.push(el) : null;
    });
    console.log(this.arr);
  }
}

class WordLengths extends WordExtractor {
  get_words(text) {
    super.get_words(text);
    const res = this.arr.map((el) => el.length);
    console.log(res);
  }
}

const wordLengths = new WordLengths();

wordLengths.get_words("hi hello hi");
