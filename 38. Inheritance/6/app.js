// 6. Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: " Learning new things"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"

class SentenceRepository {
  sentences = ["Small", "Medium sized", "A sentence that is quite long"];
}

class LongestSentence extends SentenceRepository {
  getlongestSentences() {
    const length = this.sentences
      .map((el) => el.length)
      .reduce((sum, el) => (el > sum ? (sum = el) : sum), 0);
    const res = this.sentences.filter((el) => el.length == length);
    console.log(res);
  }
}

const sentenceRepository = new SentenceRepository();
const longestSentence = new LongestSentence();
longestSentence.getlongestSentences();
