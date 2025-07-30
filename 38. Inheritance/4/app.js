// 4. Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon",
// "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
// getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
// значению.
// Входные:
// const repo = new FilteredWords();
// repo.getWordsByLength(5);
// → Результат: ["apple", "lemon", "mango"]

class StringRepository {
  words = [
    "apple",
    "apricot",
    "lemon",
    "mango",
    "nectarine",
    "banana",
    "kiwi",
    "plum",
  ];
}

class FilteredWords extends StringRepository {
  getWordsLength(length) {
    const res = this.words.filter((el) => el.length == length);
    console.log(res);
  }
}

const stringRepository = new StringRepository();
const filteredWords = new FilteredWords();
filteredWords.getWordsLength(+prompt());
