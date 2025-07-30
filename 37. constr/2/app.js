// 2. Добавьте метод greet() в класс User первого задания,
// который выводит строку: "Привет, меня зовут
// {name}".

class User {
  constructor(name) {
    console.log(this.greet(name));
  }
  greet(name) {
    return `Привет, меня зовут ${name}`;
  }
}

const user = new User("Nikita");
