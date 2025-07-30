// Класс ArraySummer, в конструктор передаётся массив чисел.
// Сразу после создания объекта считается сумма и выводится.

class ArraySummer {
  constructor(arr) {
    console.log(this.findSum(arr));
  }
  findSum(arr) {
    const res = arr.reduce((el, sum) => (sum += +el), 0);
    return res;
  }
}

const arraySummer = new ArraySummer([1, 2, 3]);
