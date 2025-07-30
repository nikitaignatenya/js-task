// 3. Создайте класс Book с полями title и author. Значения полей
// задайте через конструктор. Добавьте
// метод getInfo(), возвращающий строку: "Название: ..., Автор: ...".

class Book {
  title;
  author;
  constructor(title, author) {
    this.title = title;
    this.author = author;
    console.log(this.getInfo(this.title, this.author));
  }
  getInfo(title, author) {
    return `Назввание: ${title}, Автор: ${author}`;
  }
}

const book = new Book("Превосходство", `Пушкин`);
