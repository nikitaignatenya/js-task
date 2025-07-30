// 3. Создай класс NumberChecker с методом is_even, который принимает число и возвращает True,
// если оно чётное. Вызови через объект.

class NumberChecker {
  constructor(num) {
    const res = this.is_iven(num);
    console.log(res);
  }
  is_iven(num) {
    return num % 2 == 0 ? true : false;
  }
}

const numberChecker = new NumberChecker(+prompt());
