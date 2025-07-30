// 8. Создай класс VerbList, метод get() → ["running", "eat", "walking", "sleep"].
// Создай наследника IngFilter, метод get(), который возвращает ["running", "walking"].

class VerbList {
  get() {
    return ["running", "eat", "walking", "sleep"];
  }
}

class IngFilter extends VerbList {
  get() {
    const arr = super.get();
    const res = arr.filter((el) => el == "running" || el == "walking");
    console.log(res);
  }
}

const ingFilter = new IngFilter();
ingFilter.get();
