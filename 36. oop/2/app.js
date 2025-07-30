// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие
// функции. Добавить проверки на ввод

class Calculator {
  a = 1;
  b = 2;
  sum() {
    console.log(this.a + this.b);
  }
  raz() {
    console.log(this.b - this.a);
  }
  chs() {
    console.log(this.b * this.a);
  }
  pr() {
    console.log(this.b / this.a);
  }
}

const calculator = new Calculator();

calculator.sum();
calculator.pr();
calculator.chs();
calculator.raz();
