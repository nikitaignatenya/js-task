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

class TextCollection {
  arr = ["string", "nikitos", "push", "string", "error"];
  countWords() {
    return this.arr.length;
  }
  findLongestWord() {
    const max = this.arr.reduce(
      (max, el) => (el.length > max ? (max = el.length) : max),
      0
    );
    return this.arr.filter((el) => max == el.length);
  }
  filterByLength(minLength) {
    return this.arr.filter((el) => el.length >= minLength);
  }
}

class UniqueTextCollection extends TextCollection {
  uniqueWords() {
    console.log(this.countWords());
    console.log(this.findLongestWord());
    console.log(this.filterByLength(6));

    return [...new Set(this.arr)];
  }
}

const uniqueTextCollection = new UniqueTextCollection();
console.log(uniqueTextCollection.uniqueWords());
