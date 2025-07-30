// 4. Создай класс Multiplier с методом double, который возвращает удвоенное число.
// Проверь, что метод работает, вызвав его через объект.

class Multiplier {
  double(num) {
    return num * 2;
  }
}

const multiplier = new Multiplier();
const res = multiplier.double(+prompt());
console.log(res);
