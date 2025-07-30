// 8. Добавьте в класс Car поле speed = 0, метод drive(speed) для перезаписи скорости и stop() для
// остановки (скорость = 0).

class Car {
  speed = 0;
  constructor(speed) {
    console.log(this.drive(speed));

    setTimeout(this.stop, 3000);
  }
  drive(speed) {
    return (this.speed = speed);
  }
  stop() {
    this.speed = 0;
    console.log(this.speed);
  }
}

const car = new Car(+prompt());
