// 6. Создай класс AgeChecker, в котором:
// - метод isValid(age) возвращает true, если возраст больше или равен 18.
// - метод main() спрашивает возраст через prompt(), вызывает isValid(), и выводит в консоль:
//  "Доступ разрешен" — если возраст валидный

class AgeChecker {
  isvalid(num) {
    return num >= 18 ? true : false;
  }
  main() {
    const num = +prompt();
    const res = this.isvalid(num);
    return res ? "Доступ разрешён" : "No";
  }
}

const ageChecker = new AgeChecker();
const final = ageChecker.main();
console.log(final);
