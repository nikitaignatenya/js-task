// 2.  Создай класс DayWeather с полями day, temps (массив температур за день). Метод average() возвращает день
//  с самой высокой температурой.

// Входные:
// const weatherData = [
//   { day: "Mon", temps: [20, 22, 25] },
//   { day: "Tue", temps: [18, 20, 19] },
//   { day: "Wed", temps: [25, 27, 30] },
//   { day: "Thu", temps: [19, 21, 20] },
//   { day: "Fri", temps: [22, 24, 23] },
// ];
// Выходные: Wed (тк 30 - максимальная температура)

class DayWeather {
  count = -Infinity;
  day;
  temps = [
    { day: "Mon", temps: [20, 22, 25] },
    { day: "Tue", temps: [18, 20, 19] },
    { day: "Wed", temps: [25, 27, 30] },
    { day: "Thu", temps: [19, 21, 20] },
    { day: "Fri", temps: [22, 24, 23] },
  ];
  average() {
    this.temps.forEach((el) => {
      el.temps = el.temps.reduce(
        (max, ell) => (ell > max ? (max = ell) : max),
        -Infinity
      );
      el.temps > this.count ? (this.count = el.temps) : null;
    });
    this.temps.forEach((el) => {
      el.temps == this.count
        ? console.log(`${el.day} (тк ${el.temps} - максимальная температура)`)
        : null;
    });
  }
}
const dayWeather = new DayWeather();

dayWeather.average();
