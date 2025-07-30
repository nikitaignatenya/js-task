// 13. Создай класс NumberGen, метод get(n) → возвращает массив [1, 2, 3, 4, 5].
// Создай наследника SplitEvenOdd, метод getData(n) возвращает массив из двух списков: четные и нечетные.
// Пример: '[2, 4] [1, 3, 5]'

class NumberGen {
  get(n) {
    return n;
  }
}

class SplitEvenOdd extends NumberGen {
  getData(n) {
    const arr = this.get(n);
    const arrayNew = [[], []];
    arr.forEach((el) => {
      el % 2 == 0 ? arrayNew[0].push(el) : arrayNew[1].push(el);
    });
    console.log(arrayNew);
  }
}

const splitEvenOdd = new SplitEvenOdd();
splitEvenOdd.getData([1, 2, 3, 4, 5]);
