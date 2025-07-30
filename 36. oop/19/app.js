// Создайте класс FactorialCalculator с методом factorial(n), который возвращает факториал числа.

class FactorialCalculator {
  constructor(num) {
    console.log(this.factorial(num));
  }
  factorial(num) {
    if (num == 1) return 1;
    return num * this.factorial(num - 1);
  }
}

const factorialCalculator = new FactorialCalculator(+prompt());
