// 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]

class NumberArrayGenerator {
  arr;
  generateArray() {
    this.arr = [];
    for (let i = 0; i <= 8; i++) {
      this.arr.push(i);
    }
  }
}

class EvenNumberFilter extends NumberArrayGenerator {
  generateArray() {
    super.generateArray();
    const filteredArr = this.arr.filter((el) => el % 2 == 0);
    console.log(filteredArr);
  }
}

const numberArrayGenerator = new NumberArrayGenerator();
const evenNumberFilter = new EvenNumberFilter();

evenNumberFilter.generateArray();
