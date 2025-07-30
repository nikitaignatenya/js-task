// Создайте класс DigitSummer с методом sumDigits(num), который возвращает сумму цифр числа.
// 123 -> 6
// 241 -> 7

class DigitSummer {
  constructor(num) {
    console.log(this.sumDigits(num));
  }
  sumDigits(num) {
    const res = String(num)
      .split("")
      .map((el) => +el)
      .reduce((el, sum) => (sum += Number(el)), 0);
    return res;
  }
}

const digitSummer = new DigitSummer(+prompt());
