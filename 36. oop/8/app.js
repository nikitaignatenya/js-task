// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.
class Validator {
  constructor(str) {
    const res = this.isEmail(str);
    console.log(res);
  }
  isEmail(str) {
    const regEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z0-9]+$/i;
    try {
      if (!str) throw new Error("Пусто");
      return regEmail.test(str) ? true : false;
    } catch (er) {
      console.log(er);
    }
  }
}
const validator = new Validator(prompt());
