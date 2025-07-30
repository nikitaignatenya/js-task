// 5. Создай класс Greeter с двумя методами:
// sayHello() — выводит в консоль: "Привет!"
// sayBye() — выводит в консоль: "Пока!"

class Greeter {
  sayHello() {
    console.log("Привет!");
  }
  sayBye() {
    console.log("Пока!");
  }
}

const greeter = new Greeter();

greeter.sayHello();
greeter.sayBye();
