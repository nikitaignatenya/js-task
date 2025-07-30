// 9. Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
// чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
// вызывает generateArray() и возвращает массив, где каждый элемент возведен в квадрат.
// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]

class DataGenerator {
  size;
  arr;
  generateArray(size) {
    this.size = size;
    let i = 1;
    this.arr = [];
    while (this.arr.length !== this.size) {
      this.arr.push(i);
      i++;
    }
  }
}
class SquareArray extends DataGenerator {
  getSquareArray(size) {
    this.generateArray(size);
    const res = this.arr.map((el) => el ** 2);
    console.log(res);
  }
}
const dataGenerator = new DataGenerator();
const squareArray = new SquareArray();
squareArray.getSquareArray(5);
