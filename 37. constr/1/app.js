// 1. Создайте класс User, содержащий свойства name и age.
//  Задайте эти значения через конструктор

class User {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(name + " " + age);
  }
}

const user = new User("Nikita", 22);
