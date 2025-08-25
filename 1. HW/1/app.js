// 1. Создай класс UserCollection с массивом пользователей {name, age, city} и методами:
// - filterByCity(city) — массив пользователей из указанного города
// - averageAge() — средний возраст пользователей
// - getNames() — массив имён пользователей
// Создай класс AdvancedUserCollection, который наследует UserCollection и добавляет метод:
// - groupByCity() — объект с ключами — городами, значениями — массивы пользователей из этих городов

// class UserCollection {
//   array = [
//     { name: "Nikita", age: 23, city: "Minsk" },
//     { name: "Maksim", age: 20, city: "Gomel" },
//     { name: "Stas", age: 42, city: "Grodno" },
//     { name: "Artem", age: 14, city: "Grodno" },
//   ];
//   filterByCity(city) {
//     return this.array.filter((el) => el.city == city);
//   }
//   averageAge() {
//     return (
//       this.array.reduce((sum, el) => (el.age += sum), 0) / this.array.length
//     );
//   }
//   getNames() {
//     return this.array.map((el) => el.name);
//   }
// }
// class AdvancedUserCollection extends UserCollection {
//   groupByCity() {
//     let obj = {};
//     this.array.forEach((el) => {
//       obj[el.city] ? obj[el.city].push(el.name) : (obj[el.city] = [el.name]);
//     });
//     console.log(obj);
//   }
// }

// const advancedUserCollection = new AdvancedUserCollection();
// advancedUserCollection.groupByCity();
// console.log(advancedUserCollection.filterByCity("Grodno"));
// console.log(advancedUserCollection.averageAge());
// console.log(advancedUserCollection.getNames());

// 2. Создай класс TextCollection с массивом строк и методами:
// - countWords() — общее количество слов во всех строках
// - findLongestWord() — самое длинное слово среди всех строк
// - filterByLength(minLength) — возвращает массив строк длиной не меньше minLength
// Создай класс UniqueTextCollection, который наследует TextCollection и добавляет метод:
// - uniqueWords() — массив уникальных слов из всех строк

// class TextCollection {
//   arr = ["string", "nikitos", "push", "string", "error"];
//   countWords() {
//     return this.arr.length;
//   }
//   findLongestWord() {
//     const max = this.arr.reduce(
//       (max, el) => (el.length > max ? (max = el.length) : max),
//       0
//     );
//     return this.arr.filter((el) => max == el.length);
//   }
//   filterByLength(minLength) {
//     return this.arr.filter((el) => el.length >= minLength);
//   }
// }

// class UniqueTextCollection extends TextCollection {
//   uniqueWords() {
//     console.log(this.countWords());
//     console.log(this.findLongestWord());
//     console.log(this.filterByLength(6));

//     return [...new Set(this.arr)];
//   }
// }

// const uniqueTextCollection = new UniqueTextCollection();
// console.log(uniqueTextCollection.uniqueWords());
// console.log(+'HELLO');

// function sumArray(n) {
//   if (n === 1) return 1;
//   return n + sumArray(n - 1);
// }

// const res = sumArray(5);
// console.log(res);

// 1) Что отобразит консоль?
// console.log(isNaN(Number(NaN)));

// 2) Что отобразит консоль?
// let n = 0;
// console.log(n++);

// 3) Что отобразит консоль?
// let obj = {
//   count: "hi",
// };
// const testBind = () => console.log(this.count);
// const newBind = testBind.bind(obj);
// newBind();

// 3.1)  Что отобразит консоль?
// let = 2;
// console.log(this.let);

// 4)  Что отобразит консоль?
// let i = 0;
// do {
//   console.log(i++);
// } while (i < 1);

// 5)  Что отобразит консоль?
// let arr = [0, 1, 2, 3];
// let i = 4;
// arr.forEach((el) => {
//   return arr.push(i++);
// });
// console.log(arr);

// 6)  Что отобразит консоль?
// let arr = [1];
// for (let key in arr) {
//   console.log(typeof key);
// }

// 7)  Что отобразит консоль?
// let obj = {
//   myName: "Nikita",
// };
// console.log(myName in obj);

// 8)  Что отобразит консоль?
// console.log(Math.ceil(!NaN));

// 9)  Что отобразит консоль?
// let arr = [null, NaN, {}, undefined, []];
// const testArr = arr.map((el) => (el ? true : false));
// console.log(testArr);

// 10)  Что отобразит консоль?
// console.log(cl.hi);
// class Cl {
//   hi = "hello";
// }
// var cl = new Cl();
