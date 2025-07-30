// 7. Создайте класс Student с полями name и массивом оценок grades. Реализуйте метод
// getAverageGrade() для подсчёта среднего балла.

class Student {
  name;
  arr;
  constructor(name, arr) {
    this.name = name;
    this.arr = arr;
  }
  getAverageGrade() {
    const sum = this.arr.reduce((el, sum) => (el += sum), 0);
    return `${this.name} ${sum / this.arr.length}`;
  }
}

const student = new Student("Nikta", [1, 2, 3, 4, 5, 6]);
const res = student.getAverageGrade();
console.log(res);
