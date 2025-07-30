// 6. Создай метод getCategoryCounts() в классе ProductManager, который возвращает объект,
// где ключи — названия категорий, а значения — количество товаров в каждой категории.
//  Для подсчёта количества используй цикл while.

class ProductManager {
  product;
  num;
  constructor() {
    this.product = {};
    this.num = 3;
    this.getCategoryCounst();
  }
  getCategoryCounst() {
    let i = 0;
    while (i !== this.num) {
      this.product[prompt("Категория")] = prompt("Количество");
      i++;
    }
    console.log(this.product);
  }
}

const productManager = new ProductManager();
