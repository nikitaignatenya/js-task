// 1. Создай конструктор Product, который принимает три значения: name (название товара), price (число) и
//  category (строка). Внутри конструктора реализуй метод isValid(), который проверяет: название не должно
//  быть пустым, цена должна быть положительным числом, а категория — одной из следующих:
//  "одежда", "электроника", "книги". Если хотя бы одно из условий не выполняется,
//  выброси ошибку через throw new Error(...).

class FilteredCategory {
  constructor(name, price, category) {
    const isValid = function () {
      try {
        let arr = ["одежда", "электроника", "книги"];
        if (!name) throw new Error("Пустое название");
        if (price <= 0) throw new Error("цена меньше либо равна 0");
        if (!arr.includes(category.toLowerCase()))
          throw new Error("Категория не подходит");
        console.log(`${name} ${price}$ ${category}`);
      } catch (er) {
        console.log(er);
      }
    };
    isValid();
  }
}

const filteredCategory = new FilteredCategory("Nikita", 20, "Одежда");
