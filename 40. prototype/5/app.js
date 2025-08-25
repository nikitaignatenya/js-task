// 5. Посчитать сумму чисел в массиве.
// • В родителе используем цикл.
// • В дочернем классе — рекурсию

class Sum1 {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  findSum() {
    let sum = 0;
    for (let i = 1; i < this.arr.length; i++) {
      sum += this.arr[i];
    }
    return sum;
  }
}

class Sum2 extends Sum1 {
  i = 0;
  findSum2() {
    if (this.i == this.arr.length - 1) return 0;
    this.i++;
    return this.arr[this.i] + this.findSum2();
  }
}

const sum2 = new Sum2();
const res1 = sum2.findSum();
const res2 = sum2.findSum2();

console.log(res1);
console.log(res2);
