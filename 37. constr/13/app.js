// 2. Создай класс ProductManager, который в конструкторе принимает массив обычных объектов с товарами
//  (каждый объект содержит поля name, price, category) и сохраняет его в свойство products. Добавь метод
//  getByPriceRange(min, max), который возвращает массив всех товаров, у которых цена находится в пределах
// от min до max включительно. Перебор можно сделать с помощью filter.

class ProductManager {
  products;
  constructor(arr) {
    this.products = arr;
    this.getByPriceRange(10, 30);
  }
  getByPriceRange(min, max) {
    try {
      const arrFiltered = this.products.filter(
        (el) => el.price <= max && el.price >= min
      );
      console.log(...arrFiltered);
    } catch (er) {
      console.log(er);
    }
  }
}

const productManager = new ProductManager([
  { name: "Nikita", price: 2, category: "Одежда" },
  { name: "Nikita", price: 15, category: "Одежда" },
  { name: "Nikita", price: 35, category: "Одежда" },
  { name: "Nikita", price: 12, category: "Одежда" },
]);
