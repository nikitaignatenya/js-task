// 3. В классе ProductManager реализуй метод getByCategory(category), который возвращает
//  массив всех товаров из products, у которых поле category совпадает с переданным значением.
//  Для перебора используй метод filter.

class ProductManager {
  products;
  constructor(arr) {
    this.products = arr;
    this.getCategory(prompt());
  }
  getCategory(value) {
    const arrFiltered = this.products.filter((el) =>
      el.category.includes(value)
    );
    console.log(...arrFiltered);
  }
}

const productManager = new ProductManager([
  { name: "Nikita", price: 2, category: "Одежда" },
  { name: "Nikita", price: 15, category: "Овощи" },
  { name: "Nikita", price: 35, category: "Продукты" },
  { name: "Nikita", price: 12, category: "Техника" },
]);
