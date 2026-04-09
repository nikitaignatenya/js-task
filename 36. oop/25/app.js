// 1. Каков результат выполнения данного кода?
// function Person(name) {
//   this.name = name;
// }
// const dev = Person("Alice");
// console.log(dev);
// // undefind

// 2. Как реализовано наследование в JavaScript на базовом уровне?
// A. Интерфейсное наследование
// Б. Классовое наследование
// В. Прототипное наследование +
// Г. Множественное наследование

// 3. В чем главное отличие статических методов класса (static) от обычных методов в JavaScript?
// A. Они всегда являются приватными
// Б. Они вызываются на классе, а не на его экземплярах +
// В. Они не имеют доступа к 'this' +
// Г. Они не могут наследоваться +

// 4. Для чего используется ключевое слово super в конструкторе подкласса?
// A. Для создания копии родительского объекта
// Б. Для вызова конструктора родительского класса +
// В. Это синоним слова this
// Г. Чтобы сделать метод приватным

// 5. Исправить ошибки:

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//     console.log(this.breed, this.name);
//   }
// }

// const dog = new Dog("Rex", "Labrador");

// 6. Что выведет лог:

// class A {}
// class B extends A {}
// const b = new B();
// console.log(b instanceof A);
//true

// 7. Что выведет лог:

// class User {
//   static count = 0;

//   constructor() {
//     this.count++;
//   }
// }

// const u1 = new User();
// const u2 = new User();

// console.log(User.count);
//0

// 8. Что выведет лог:

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.sayHi = function () {
//   return `Hi, I'm ${this.name}`;
// };

// const dog = new Animal("Rex");

// Animal.prototype.sayHi = function () {
//   return `Hello from ${this.name}`;
// };

// console.log(dog.sayHi());

// console.log(dog.__proto__);
// console.log(Animal.prototype);

// // Hello from Rex

// 9. Что выведет лог:

// class User {}
// const user = new User();
// console.log(user.__proto__ === User.prototype);
// ("true");

// 10. Что выведет лог:

// class Timer {
//   constructor() {
//     this.seconds = 0;
//   }

//   start() {
//     setInterval(function () {
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   }
// }

// const t = new Timer();
// t.start();
// NaN

// 11. Вам нужно создать класс Square, который наследуется от Rectangle.
//  Какой код в конструкторе Square будет верным?

// class Rectangle {
//   constructor(w, h) {
//     this.w = w;
//     this.h = h;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// const square = new Square(3);
// console.log(square.w * square.h);

// 12. Создайте класс DataFilter. Реализуйте метод hasDuplicates(array),
// который возвращает true, если в массиве есть хотя бы одно повторяющееся
// число, и false — если все числа уникальны.

// class DataFilter {
//   hasDuplicates(array) {
//     return [...new Set(array)].length == array.length ? true : false;
//   }
// }

// const dataFilter = new DataFilter();
// const res = dataFilter.hasDuplicates([1, 2, 3, 4, 5, 6, 1]);
// console.log(res);

// 13. Создайте класс GradeBook. Реализуйте метод addGrade(score)
//  для добавления оценки (0–100) и метод getAverage(), который
// возвращает средний балл всех добавленных оценок.

// class GradeBook {
//   addGrade(score) {
//     this.array = [];
//     while (score !== 0) {
//       this.array.push(Math.round(Math.random() * 100));
//       score--;
//       console.log(this.array);
//     }
//   }
//   getAverage() {
//     this.addGrade(10);
//     return this.array.reduce((el, sum) => (sum += el), 0) / this.array.length;
//   }
// }

// const gradeBook = new GradeBook();
// const res = gradeBook.getAverage();
// console.log(res);

// 14. Создайте класс CollectionHelper. Реализуйте метод mergeUnique(arr1, arr2),
// который объединяет два массива в один, удаляя при этом все дубликаты.

// class CollectionHelper {
//   mergeUnique(arr1, arr2) {
//     const newArr1 = [...new Set(arr1)];
//     const newArr2 = [...new Set(arr2)];
//     return [...new Set([...newArr1, ...newArr2])];
//   }
// }

// const collectionHelper = new CollectionHelper();
// const res = collectionHelper.mergeUnique([1, 2, 3, 4, 2], [1, 5, 6, 4, 4]);
// console.log(res);

// 15. Напишите класс Calculator, который принимает начальное число в конструкторе.
// Реализуйте методы add, subtract, multiply.

// class Calculator {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.add();
//     this.subtract();
//     this.multiply();
//   }
//   add() {
//     console.log(this.num1 + this.num2);
//   }
//   subtract() {
//     console.log(this.num1 - this.num2);
//   }
//   multiply() {
//     console.log(this.num1 * this.num2);
//   }
// }

// const calculator = new Calculator(2, 5);

// 16 Создайте класс PalindromeChecker. Реализуйте метод isPalindrome(str),
//  который игнорирует регистр и пробелы.

// class PalindromeChecker {
//   isPalindrome(str) {
//     const res =
//       str.toLowerCase().trim().split("").reverse().join("") ==
//       str.toLowerCase().trim()
//         ? true
//         : false;
//     console.log(res);
//   }
// }

// const palindromeChecker = new PalindromeChecker();

// palindromeChecker.isPalindrome("hih");

// 17 Создайте класс UserRegistry. Реализуйте метод addUser(id), который
// добавляет ID пользователя в систему, и метод isRegistered(id), который
//  проверяет наличие ID.

// class UserRegistry {
//   users = [{ id: 1, userName: "Nikita" }];
//   addUser(id, userName) {
//     this.users.push({ id: id, userName: userName });
//     console.log(this.users);
//   }

//   isRegistered(id) {
//     const res = this.users.some((el) => el.id == id);
//     console.log(res);
//   }
// }

// const userRegistry = new UserRegistry();

// userRegistry.addUser(
//   userRegistry.users[userRegistry.users.length - 1].id + 1,
//   "Sergey",
// );

// userRegistry.isRegistered(2);

// 18 Создайте класс Todo. У него есть массив задач. Каждая задача — это объект
//  { id, text, completed: false }. Реализуйте метод completeTask(id), который
// находит задачу по ID и меняет статус на true.

// class Todo {
//   tasks = [
//     { id: 1, text: "Hello", completed: false },
//     { id: 2, text: "Hello", completed: false },
//   ];
//   completeTask(id) {
//     this.tasks.forEach((el) => (el.id == id ? (el.completed = true) : null));
//     console.log(this.tasks);
//   }
// }

// const todo = new Todo();
// todo.completeTask(2);

// 19. Создайте класс Vehicle с полем speed и методом move(). Наследуйте от него класс Car,
// который добавляет метод honk().

class Vehicle {
  speed;
  move() {}
}

class Car extends Vehicle {
  honk() {}
}

// 20. Создайте класс Animal с методом speak().
// Затем создайте класс Dog, который наследует Animal и
//  переопределяет метод speak(), чтобы он выводил "Гав!".

// class Animal {
//   speak(s) {
//     console.log(s);
//   }
// }

// class Dog extends Animal {
//   speak(s) {
//     super.speak(s);
//   }
// }

// const dog = new Dog();
// dog.speak("Гав!");

// 21. Создайте класс LimitedCounter. У него есть методы increment и decrement.
// В конструкторе передается maxLimit.
// Счётчик не может стать больше лимита или меньше нуля.

// class LimitedCounter {
//   constructor(maxLimit) {
//     this.count = 8;
//     this.maxLimit = maxLimit;
//   }
//   increment() {
//     this.count < this.maxLimit ? this.count++ : null;
//   }

//   decrement() {
//     this.count > 0 ? this.count-- : null;
//   }
// }

// const limitedCounter = new LimitedCounter(4);

// for (let i = 0; i < 3; i++) {
//   limitedCounter.decrement();
// }

// console.log(limitedCounter.count);

// Создайте класс Stack, который содержит поле arr и реализует методы pushValue (добавить элемент),
// popValue (удалить верхний элемент), peekValue (посмотреть верхний элемент) и isEmpty() (проверка на пустоту).

class Stack {
  constructor() {
    this.arr = [1, 2, 3, 4, 5, 6];
  }
  pushvalue() {
    return this.arr;
  }
  popValue() {
    return this.arr.slice(1);
  }
  peekValue(id) {
    return this.arr.filter((el) => el == id);
  }
  isEmpty() {
    return this.arr.length ? true : false;
  }
}

const stack = new Stack();

const res1 = stack.pushvalue();
const res2 = stack.popValue();
const res3 = stack.peekValue(3);
const res4 = stack.isEmpty();

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
