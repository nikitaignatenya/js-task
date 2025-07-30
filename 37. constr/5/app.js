// Создайте класс Product. Добавьте проверку в классе Product, чтобы цена не могла быть меньше
// нуля. Если значение некорректное — выбрасывайте ошибку throw new Error. Ошибку обработать
// через try catch.

class Product {
  constructor(p) {
    console.log(this.isValid(p));
  }
  isValid(p) {
    try {
      if (p < 0) throw new Error("Меньше");
      return true;
    } catch (er) {
      return console.log(er);
    }
  }
}

const product = new Product(+prompt());
