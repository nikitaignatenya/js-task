// 6. Создай класс Sequence, метод get() → возвращает массив чисел сгенерированных prompt.
// Создай наследника OddIndexSum , метод sum(), который суммирует элементы на нечетных индексах.
// Ожидаемый результат: 7 + 5 = 12.

class Sequence {
  arr = [];
  get() {
    for (let i = 0; i < 6; i++) {
      this.arr.push(+prompt());
    }
  }
}

class OddIndexSum extends Sequence {
  sum() {
    this.get();
    const res = this.arr.reduce(
      (sum, el, i, arr) => (i % 2 !== 0 ? (sum += el) : sum),
      0
    );
    console.log(res);
  }
}

const oddIndexSum = new OddIndexSum();
oddIndexSum.sum();
