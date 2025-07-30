// 1. Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(),
// который возвращает площадь прямоугольника.
// Входные: Rectangle(5, 10) → Результат: 50
// Входные: Rectangle(3, 7) → Результат: 21
// Входные: Rectangle(6, 9) → Результат: 54

class Rectangle {
  width;
  height;
  getArea() {
    this.width = +prompt();
    this.height = +prompt();
    console.log(this.width * this.height);
  }
}

const rectangle = new Rectangle();

rectangle.getArea();
