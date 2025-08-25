// 1. Создай объект animal с полем eats: true. Создай объект rabbit и сделай так, чтобы он “наследовал” eats
// через прототип.
// → Проверь rabbit.eats.

const animal = {
  eats: true,
};

const rabbit = {};

rabbit.__proto__ = animal;

console.log(rabbit.eats);
