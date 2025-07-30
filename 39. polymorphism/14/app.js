// 3. Создай класс BaseNumbers с методом get_numbers() →  возвращает массив рандомных чисел Math.random.
// Создай наследника EvenDoubler с методом get_numbers(), который удваивает только четные числа.
// Ожидаемый результат: [4, 8].

class BaseNumbers {
  array = [];
  get_numbers() {
    for (let i = 0; i < 11; i++) {
      this.array.push(Math.round(Math.random() * 100));
    }
  }
}

class EvenDoubler extends BaseNumbers {
  get_numbers() {
    super.get_numbers();
    const res = this.array.map((el) => (el % 2 == 0 ? el * 2 : el));
    console.log(res);
  }
}

const evenDoubler = new EvenDoubler();
evenDoubler.get_numbers();
