// Создайте класс MaxFinder с методом findMax(arr),
// который возвращает наибольшее число в массиве.

class MaxFinder {
  constructor(arr) {
    console.log(this.findMax(arr));
  }
  findMax(arr) {
    const res = arr.reduce(
      (el, max) => (el > max ? (el = max) : max),
      -Infinity
    );
    return res;
  }
}

const maxFinder = new MaxFinder([1, 2, 3, 4, 5]);
