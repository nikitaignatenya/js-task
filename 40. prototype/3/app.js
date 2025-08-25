// 3. Нужно посчитать факториал числа n (произведение всех чисел от 1 до n).
// • В родительском классе реализуем через цикл.
// • В дочернем классе ту же задачу решаем через рекурсию.
// Для 5 = 5 * 4 * 3 * 2 * 1 = 120

class Fac1 {
  find(n) {
    let count = 1;
    for (let i = 2; i <= n; i++) {
      count *= i;
    }
    return count;
  }
}

class Fac2 extends Fac1 {
  constructor(n) {
    super();
    const res1 = this.find(n);
    const res2 = this.find2(n);
    console.log(res1);
    console.log(res2);
  }
  find2(n) {
    if (n === 1) return 1;
    return n * this.find2(n - 1);
  }
}

const fac2 = new Fac2(5);
