// 4. Создай класс IntGenerator, метод getNums() возвращает [-3, 1, 4, -1].
// Создай наследника PositiveSum и метод метод getNums(), который находит сумму положительных.
// Ожидаемый результат: 5.

class IntGenerator {
  getNums() {
    return [-3, 1, 4, -1];
  }
}
class PositiveSum extends IntGenerator {
  getNums() {
    const arr = super.getNums();
    const res = arr.reduce((sum, el) => (el > 0 ? (sum += el) : sum), 0);
    console.log(res);
  }
}

const positiveSum = new PositiveSum();
positiveSum.getNums();
