// 3. Класс User: с полем password. Метод isSecure() возвращает true, если длина пароля ≥ 8 и есть хотя бы одна цифра.
//  Дан массив пользователей — выведи всех с небезопасными паролями.
// Входные:
// const users = [
//   { username: "admin", password: "1234" },
//   { username: "user1", password: "mypassword1" },
//   { username: "guest", password: "guest" },
//   { username: "root", password: "root" },
// ];
// Выходные:
// [
//   { username: 'admin', password: '1234' },
//   { username: 'guest', password: 'guest' },
//   { username: 'root', password: 'root' }
// ]

class User {
  password;
  constructor(users) {
    this.isSecure(users);
  }
  isSecure(users) {
    users.forEach((el) => {
      try {
        if (!/(?=.*[A-Za-z])(?=.*\d).{8,}/.test(el.password)) {
          console.log(el);
        }
      } catch (er) {
        console.log(er);
      }
    });
  }
}

const users = [
  { username: "admin", password: "1234" },
  { username: "user1", password: "mypassword1" },
  { username: "guest", password: "guest" },
  { username: "root", password: "root" },
];
const user = new User(users);
