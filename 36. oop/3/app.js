// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString,
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

class WordString {
  string = prompt();
  rev = function reverseString() {
    console.log(this.string.split("").reverse().join(""));
  };
  upperFirst() {
    console.log(this.string[0].toUpperCase() + this.string.slice(1));
  }
  upperEvery() {
    console.log(
      this.string
        .split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" ")
    );
  }
}

const wordString = new WordString();

wordString.rev();
wordString.upperFirst();
wordString.upperEvery();
