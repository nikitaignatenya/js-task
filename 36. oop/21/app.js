// Создайте класс DuplicateRemover с методом removeDuplicates(arr),
// который убирает дубликаты. Использовать метод new Set()

class DuplicateRemover {
  constructor(arr) {
    console.log(this.removeDublicates(arr));
  }
  removeDublicates(arr) {
    const res = [...new Set(arr)];
    return res;
  }
}

const duplicateRemover = new DuplicateRemover([1, 1, 2, 2, 3, 3, 4, 4, 5]);
