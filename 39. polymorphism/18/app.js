// 7. Создай класс SentenceList, метод get() → ["my cat", "your dog", "wildcat", "mouse"].
// Создай наследника CatFilter, метод filterData(), который возвращает строки, содержащие "cat".
// Ожидаемый результат: ["my cat", "wildcat"].

class SentenceList {
  get() {
    return ["my cat", "your dog", "wildcat", "mouse"];
  }
}

class CatFilter extends SentenceList {
  filterData() {
    const arr = this.get();
    const res = arr.filter((el) => el.includes("cat"));
    console.log(res);
  }
}

const catFilter = new CatFilter();
catFilter.filterData();
