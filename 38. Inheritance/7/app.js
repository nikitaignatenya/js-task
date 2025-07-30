// 7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
// position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
// Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
// Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
// Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000

class Person {
  name;
}
class Employee extends Person {
  position;
  monthly_salary;
  getAnnualSalary(name, position, monthly_salary) {
    this.name = name;
    this.position = position;
    this.monthly_salary = monthly_salary;
    console.log(`${this.name} ${this.position} ${this.monthly_salary * 12}`);
  }
}

const person = new Person();
const employee = new Employee();
employee.getAnnualSalary("Charlie", "Designer", 4000);
