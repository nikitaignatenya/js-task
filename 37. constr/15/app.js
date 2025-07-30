// 4. Добавь в класс ProductManager метод hasCheaperThan(limit), который возвращает true,
//  если в списке товаров есть хотя бы один товар с ценой ниже значения limit, и false — если
//  таких товаров нет. Используй метод some.

class ProductManager {
  product;
  constructor(arr) {
    this.product = arr;
    this.hasCheaperThan(+prompt());
  }
  hasCheaperThan(limit) {
    const arrSome = this.product.some((el) =>
      el.price < limit ? true : false
    );
    console.log(arrSome);
  }
}

const productManager = new ProductManager([
  { name: "Nikita", price: 2, category: "Одежда" },
  { name: "Nikita", price: 15, category: "Овощи" },
  { name: "Nikita", price: 35, category: "Продукты" },
  { name: "Nikita", price: 12, category: "Техника" },
]);
