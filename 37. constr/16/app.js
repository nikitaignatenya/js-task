// 5. Реализуй метод getAveragePrice() в классе ProductManager, который возвращает среднее
//  арифметическое цены всех товаров из массива products. Если товаров нет, метод должен вернуть 0.
//  Для подсчёта суммы используй метод reduce().

class ProductManager {
  products;
  constructor(arr) {
    this.products = arr;
    this.getAveragePrice();
  }
  getAveragePrice() {
    try {
      if (!this.products) throw new Error("Товаров нет");
      const arrReduce = this.products.reduce(
        (sum, el) => (sum += +el.price),
        0
      );
      console.log(arrReduce / this.products.length);
    } catch (er) {
      console.log(er);
    }
  }
}

const productManager = new ProductManager([
  { name: "Nikita", price: 2, category: "Одежда" },
  { name: "Nikita", price: 15, category: "Овощи" },
  { name: "Nikita", price: 35, category: "Продукты" },
  { name: "Nikita", price: 12, category: "Техника" },
]);
