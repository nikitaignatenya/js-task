// 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size),
// который вызывает generateNumbers(size) и фильтрует только четные числа.
// Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
// Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
// Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]

class NumberGenerator {
  arr;
  generateNumbers(size) {
    this.arr = [];
    while (this.arr.length !== 5) {
      this.arr.push(Math.round(Math.random() * 10) / (10 / size));
    }
  }
}

class EvenNumbers extends NumberGenerator {
  getEvenNumbers(size) {
    this.generateNumbers(size);
    const res = this.arr.filter((el) => el % 2 == 0);
    console.log(res);
  }
}

const numberGenerator = new NumberGenerator();
const evenNumbers = new EvenNumbers();

evenNumbers.getEvenNumbers(5);
