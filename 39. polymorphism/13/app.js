// 2. Создай класс StringSource с методом get_strings(), который возвращает ["cat", "horse", "a", "apple"].
// Создай наследника LongStringFilter с методом filter_strings(), который оставляет только строки длиной >= 4.
// Ожидаемый результат: ["horse", "apple"].

class StringSource {
  get_string() {
    return ["cat", "horse", "a", "apple"];
  }
}

class LongStringFilter extends StringSource {
  filter_string() {
    const arr = this.get_string();
    const res = arr.filter((el) => el.length > 4);
    console.log(res);
  }
}

const longStringFilter = new LongStringFilter();
longStringFilter.filter_string();
