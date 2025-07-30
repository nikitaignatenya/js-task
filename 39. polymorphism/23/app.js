// 12. Создай класс RepeatingArray, метод get() → [1, 2, 2, 3, 2, 4].
// Создай наследника MajorityElement, метод get() возвращает элемент, встречающийся чаще всего.
// Пример: 2

class RepeatingArray {
  get() {
    return [1, 2, 2, 3, 2, 4];
  }
}

class MajorityElement extends RepeatingArray {
  get() {
    const arr = super.get();
    const obj = {};
    arr.forEach((el) => {
      obj[el] = (obj[el] ?? 0) + 1;
    });
    const res = Object.values(obj).reduce(
      (sum, el) => (el > sum ? (sum = el) : sum),
      -Infinity
    );

    for (const key in obj) {
      obj[key] == res ? console.log(key) : null;
    }
  }
}

const majorityElement = new MajorityElement();
majorityElement.get();
