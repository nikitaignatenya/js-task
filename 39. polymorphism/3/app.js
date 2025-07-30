// 3. *Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
// метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
// массиве. Если общего префикса нет, метод возвращает пустую строку.
// Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
// Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
// Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte"

class CommonPrefix {
  arr;
  constructor(arr) {
    this.arr = arr;
    const res = this.findLongestprefix(this.arr);
    console.log(res);
  }
  findLongestprefix(array) {}
}

const commonPrefix = new CommonPrefix(["interview", "interval", "internet"]);
