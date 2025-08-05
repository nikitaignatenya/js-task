// 9. Создай класс PrimeGenerator, метод get(n) возвращает первые n простых чисел.
// Пример: get(4) → [2, 3, 5, 7].
// Создай наследника PrimeSquares, метод get(n) возвращает квадраты этих чисел.
// Пример: get(4) → [4, 9, 25, 49].

// class PrimeGenerator {
//   get(n) {
//     let arr = [];
//     let count = 2;
//     while (arr.length < n) {
//       if (this.isSimpleNumber(count) == true) {
//         arr.push(count);
//       }
//       count++;
//     }

//     return arr;
//   }
//   isSimpleNumber(n) {
//     for (let i = 2; i <= n / 2; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// class PrimeSquares extends PrimeGenerator {
//   get(n) {
//     let arr = super.get(n);
//     const res = arr.map((el) => el ** 2);
//     return res;
//   }
// }

class PrimeGenerator {
  get(n) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

class PrimeSquares extends PrimeGenerator {
  get(n) {
    let arr = [];
    let count = 2;
    while (arr.length < n) {
      if (super.get(count) == true) {
        arr.push(count);
      }
      count++;
    }
    const res = arr.map((el) => el ** 2);
    return res;
  }
}

const primeSquares = new PrimeSquares();
const res = primeSquares.get(5);
console.log(res);
