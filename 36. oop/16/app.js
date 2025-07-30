// 7. Создай класс NameChecker, в котором:
// - isValid(name) — возвращает true, если длина имени от 3 до 10 символов
// - main() — получает имя через prompt(), вызывает isValid(), и выводит:
//  "Имя принято" или "Имя слишком короткое/длинное"

class NameChecker {
  constructor() {
    const final = this.main();
    console.log(final);
  }
  isValid(str) {
    return str.length >= 3 && str.length <= 10 ? true : false;
  }
  main() {
    const res = this.isValid(prompt());
    return res ? "Имя приянто" : "Имя слишком короткое/длинное";
  }
}

const nameChecker = new NameChecker();
