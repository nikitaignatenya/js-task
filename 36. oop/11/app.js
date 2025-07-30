// 2. Создай класс Adder с методом add, который принимает два числа и возвращает их сумму. Вызови метод через объект.

class Adder {
  add(a, b) {
    return a + b;
  }
}

const adder = new Adder();

const res = adder.add(1, 3);
console.log(res);
