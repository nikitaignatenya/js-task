// 4. Нужно найти сумму чисел от 1 до n.
// • В родителе используем цикл.
// • В дочернем классе используем рекурсию.
// Для 5 = 1 + 2 + 3 + 4 + 5 = 15

class Sum1 {
  find1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  }
}

class Sum2 extends Sum1 {
  find2(n) {
    if (n === 1) return 1;
    return n + this.find2(n - 1);
  }
}

const sum2 = new Sum2();
sum2.find1(5);
const res = sum2.find2(5);
console.log(res);
