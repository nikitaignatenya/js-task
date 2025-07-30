// 7. Реализуй метод removeByCategory(category) в классе ProductManager,
//  который удаляет из массива products все товары с указанной категорией.
//  Массив должен измениться, для этого можно использовать метод filter()
// и перезаписать this.products.

class ProductManager {
  products;
  constructor(arr) {
    this.products = arr;
  }
  removeByCategory(category) {
    const arrFiltered = this.products.filter((el) => el.price == category);
    console.log(...arrFiltered);
  }
}

const productManager = new ProductManager([
  { name: "Nikita", price: 2, category: "Одежда" },
  { name: "Nikita", price: 15, category: "Овощи" },
  { name: "Nikita", price: 35, category: "Продукты" },
  { name: "Nikita", price: 12, category: "Техника" },
]);
productManager.removeByCategory(prompt());
