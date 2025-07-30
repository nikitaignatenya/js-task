//   8. Класс EmailChecker, в котором:
// - isValid(email) — возвращает true, если email содержит символ @
// - main() — спрашивает email через prompt(), вызывает isValid() и пишет:
//  "Email корректен" или "Некорректный email"

class EmailChecker {
  constructor() {
    const final = this.main();
    console.log(final);
  }
  isValid(email) {
    return email.split("").includes("@") ? true : false;
  }
  main() {
    const res = this.isValid(prompt());
    return res ? "Email корректен" : "Некорректный email";
  }
}
const emailChecker = new EmailChecker();
