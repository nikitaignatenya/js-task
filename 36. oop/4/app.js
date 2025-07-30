// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

class MathСalculation {
  n = +prompt("Количество чисел");
  arr = [];
  sum = 0;
  pushing() {
    if (this.arr.length == this.n) return console.log(this.arr);
    this.arr.push(prompt());
    return this.pushing();
  }
  isValid() {
    this.arr.forEach((el) => {
      try {
        if (typeof el == String) throw new Error("Строки");
        if (!el) throw new Error("Недостаёт");
        el % 2 == 0 ? (this.sum += +el) : this.sum;
      } catch (error) {
        console.log(error.massage);
      }
    });
    console.log(this.sum);
  }
}

const mathСalculation = new MathСalculation();
mathСalculation.pushing();
mathСalculation.isValid();
