// Класс VowelCounter, который в конструкторе
//  принимает строку и выводит количество гласных.

class VowelCounter {
  constructor(str) {
    console.log(this.findLetter(str));
  }
  arr = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  findLetter(str) {
    const res = str.split("").filter((el) => this.arr.includes(el));
    return res.length;
  }
}

const vowelCounter = new VowelCounter(prompt());
