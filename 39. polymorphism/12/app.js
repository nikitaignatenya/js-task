// 1. Создай класс NumberFilter с методом get_numbers(), который возвращает [1, 2, 3, 4, 5, 6].
// Создай наследника EvenFilter и метод filter_numbers(), который перебирает массив и возвращает
//  только четные. Ожидаемый результат: [2, 4, 6].

// class NumberFilter {
//   get_numer() {
//     return [1, 2, 3, 4, 5, 6];
//   }
// }

// class EvenFilter extends NumberFilter {
//   array;
//   get_numer() {
//     const arr = super.get_numer();
//     this.array = arr;
//     this.filter_numbers();
//   }
//   filter_numbers() {
//     const res = this.array.filter((el) => el % 2 == 0);
//     console.log(res);
//   }
// }

// const evenFilter = new EvenFilter();
// evenFilter.get_numer();

class NumberFilter {
  get_numbers() {
    return [1, 2, 3, 4, 5, 6];
  }
}
class EvenFilter extends NumberFilter {
  filter_numbers() {
    const arr = this.get_numbers();
    const res = arr.filter((el) => el % 2 == 0);
    console.log(res);
  }
}

const evenFilter = new EvenFilter();
evenFilter.filter_numbers();
