// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4«

class Student {
  name;
  age;
  arr;
  constructor(name, age, arr) {
    this.name = name;
    this.age = age;
    this.arr = arr;
    this.getAverageGrade();
  }
  getAverageGrade() {
    const sumArr = this.arr.reduce((sum, el) => (sum += el), 0);
    console.log(
      `${this.name} (${this.age}) имеет средний бал ${sumArr / this.arr.length}`
    );
  }
}

const students = new Student("John", 19, [4, 4, 4, 5, 5]);
