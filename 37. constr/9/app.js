// 9. Создайте класс Library, принимающий массив книг (объекты с title и author). Добавьте метод
// findByAuthor(authorName), который возвращает все книги конкретного автора через filter().
// Массив:
const books = [
  { title: "Book One", author: "Author A" },
  { title: "Book Two", author: "Author B" },
  { title: "BookThree", author: "Author A" },
  { title: "Book Four", author: "Author C" },
  { title: "Book Five", author: "Author B" },
  {
    title: "Book Six",
    author: "Author D",
  },
  { title: "Book Seven", author: "Author A" },
  { title: "Book Eight", author: "Author E" },
  { title: "Book Nine", author: "Author C" },
  { title: "Book Ten", author: "Author F" },
];

class Library {
  arr;
  constructor(arr) {
    this.arr = arr;
    this.findByAuthory(prompt());
  }
  findByAuthory(authorName) {
    const res = this.arr.filter((el) =>
      el.author == authorName ? true : false
    );
    console.log(res);
  }
}

const library = new Library(books);
