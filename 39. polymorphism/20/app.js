// 9. Создай класс PrimeGenerator, метод get(n) возвращает первые n простых чисел.
// Пример: get(4) → [2, 3, 5, 7].
// Создай наследника PrimeSquares, метод get(n) возвращает квадраты этих чисел.
// Пример: get(4) → [4, 9, 25, 49].

class PrimeGenerator {
  array = [];
  get(n) {
    while (this.array.length < n) {}
  }
}

class PrimeSquares extends PrimeGenerator {
  get(n) {
    super.get(n);
    const res = this.arrayNew.map((el) => el ** 2);
    console.log(res);
  }
}

const primeSquares = new PrimeSquares();
primeSquares.get(4);
