// 2. Создай объект car с wheels: 4. Сделай объект tesla, унаследуй от car, и добавь ему свойство electric: true.
// → Проверь, что у tesla есть оба свойства.

const car = {
  wheels: 4,
};

const tesla = {
  electric: true,
};

tesla.__proto__ = car;
console.log(tesla.wheels);
console.log(tesla.electric);
