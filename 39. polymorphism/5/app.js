// 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
// класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
// Входные: new PalindromeChecker(-121) → Результат: false
// Входные: new PalindromeChecker(10) → Результат: false
// Входные: new PalindromeChecker(12321) → Результат: true

class Number {
  num;
  constructor(num) {
    this.num = num;
  }
}

class PalindromeChecker extends Number {
  constructor(num) {
    super(num);
    String(this.num).split("").reverse().join("") == String(this.num)
      ? console.log(true)
      : console.log(false);
  }
}

const number = new Number(10);
const palindromeChecker = new PalindromeChecker(10);
