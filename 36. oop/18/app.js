// Создайте класс StringReverser с методом reverseString(str), который переворачивает строку.

class StringReverser {
  constructor(str) {
    this.reverseString(str);
  }
  reverseString(str) {
    console.log(str.split("").reverse().join(""));
  }
}

const stringReverser = new StringReverser(prompt());
