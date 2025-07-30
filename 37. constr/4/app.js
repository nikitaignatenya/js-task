// 4. Создайте класс Rectangle с полями width и height.
// Реализуйте метод area(), возвращающий
// площадь

class Rectangle {
  wigth;
  height;
  constructor(width, height) {
    this.wigth = width;
    this.height = height;
    console.log(this.area(this.wigth, this.height));
  }
  area(width, height) {
    return width * height;
  }
}

const rectangle = new Rectangle(+prompt(), +prompt());
