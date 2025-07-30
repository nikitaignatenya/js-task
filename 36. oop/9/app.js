// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженную в часах и минутах.
// Входные: 150 минут → Результат: 2 часа 30 минут
// Входные: 240 минут → Результат: 4 часа 0 минут

class Time {
  constructor(num) {
    const res = this.revTime(num);
    console.log(res);
  }
  revTime(num) {
    return `${Math.floor(num / 60)} часа ${num % 60} минут`;
  }
}

const time = new Time(+prompt());
