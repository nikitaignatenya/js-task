// 6. Посчитать количество четных чисел в массиве.
// • В родителе используем цикл.
// • В дочернем классе рекурсию

class Find1 {
  arr = [1, 2, 3, 4, 5, 6];
  count = 0;
  sum1() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] % 2 == 0 ? (this.count += 1) : this.count;
    }
  }
}

class Find2 extends Find1 {
  i = 0;
  count2 = 0;
  sum2() {
    if (this.i == this.arr.length - 1) return this.count2;
    this.i++;
    if (this.arr[this.i] % 2 == 0) this.count2 += 1;
    return this.sum2();
  }
}

const find2 = new Find2();

const res = find2.sum2();
console.log(res);

find2.sum1();
console.log(find2.count);
