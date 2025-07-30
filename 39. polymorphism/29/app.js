// 5. Класс Product: name, price. Наследник TaxedProduct: добавляется поле taxRate.
//  Метод finalPrice() — у Product возвращает price, у TaxedProduct есть метод с таким же
//  названием и возвращает price + price * taxRate.

class Product {
  name = 2;
  price = 3;
  finalPrice() {
    return this.price;
  }
}

class TaxedProduct extends Product {
  taxRate = 2;
  finalPrice() {
    const price = super.finalPrice();
    return +price + +price * +this.taxRate;
  }
}

const taxedProduct = new TaxedProduct();
const res = taxedProduct.finalPrice();
console.log(res);
