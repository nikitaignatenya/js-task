// 10. Создай класс TextCleaner, метод clean(text) удаляет знаки препинания и приводит текст к нижнему регистру.
// Пример: "Hello, World!" → "hello world".
// Создай наследника WordCounter, метод count_words(text) возвращает количество слов.
// Пример: "Hello, World!" → 2.

class TextCleaner {
  clean(text) {
    console.log(text.replace(",", ""));

    return text.replaceAll(",", "");
  }
}
class WordCounter extends TextCleaner {
  count_words(text) {
    const str = this.clean(text);
    console.log(str.split(" ").length);
  }
}

const wordCounter = new WordCounter();
wordCounter.count_words("Hello, World!");
