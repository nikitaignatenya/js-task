// 5. Создай класс TextSource, метод get() → "education is powerful".
// Создай наследника VowelCounter, метод get(), который возвращает количество гласных букв.
// Ожидаемый результат: 9.

class TextSource {
  arr = ["a", "e", "i", "o", "u"];
  get() {
    return "education is powerful";
  }
}

class VowelCounter extends TextSource {
  get() {
    const str = super.get();
    const res = str
      .split("")
      .reduce((sum, el) => (this.arr.includes(el) ? (sum += 1) : sum), 0);
    console.log(res);
  }
}

const vowelCounter = new VowelCounter();
vowelCounter.get();
