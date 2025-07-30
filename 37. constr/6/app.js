// 6. Создайте класс Movie с полями title, year и rating. Добавьте метод isPopular(), возвращающий true,
// если рейтинг выше 8. Вызовите метод из нескольких экземпляров классов с разными значениями
// rating.

class Movie {
  title;
  rating;
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
    console.log(this.isPopular(this.title, this.rating));
  }
  isPopular(title, rating) {
    return rating > 8 ? `${title}: ${true}` : `${title}: ${false}`;
  }
}

const movie = new Movie(prompt(), +prompt());
