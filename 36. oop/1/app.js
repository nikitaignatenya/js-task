// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name, surname. Также класс
// должен иметь метод getAutograph, который будет выводить “{name} {surname), с наилучшими
// пожеланиями”.
class Signer {
  name = "Nikita";
  surname = "Ignatenya";
  getAutograph() {
    console.log(`${this.name} ${this.surname}, с наилучшими пожеланиями!`);
  }
}

const signer = new Signer();

signer.getAutograph();
