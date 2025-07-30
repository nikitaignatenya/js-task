// 1. Создай класс DayWeather с полями day, temps (массив температур за день). Метод average() возвращает
//  среднюю температуру в каждом дне.

// Входные:
// const weatherData = [
//   { day: "Mon", temps: [20, 22, 25] },
//   { day: "Tue", temps: [18, 20, 19] },
//   { day: "Wed", temps: [25, 27, 30] },
//   { day: "Thu", temps: [19, 21, 20] },
//   { day: "Fri", temps: [22, 24, 23] },
// ];
// Выходные:
// [
//   { "day": "Mon", "average": 22.33 },
//   { "day": "Tue", "average": 19.0 },
//   { "day": "Wed", "average": 27.33 },
//   { "day": "Thu", "average": 20.0 },
//   { "day": "Fri", "average": 23.0 }
// ]

class DayWeather {
  day;
  temps;
  average(t) {
    this.temps = t;
    this.temps.forEach((el) => {
      const sumArr = el.temps.reduce((sum, ell) => (sum += ell), 0);
      el.average = (sumArr / el.temps.length).toFixed(2);
      delete el.temps;
    });
    console.log(this.temps);
  }
}
const weatherData = [
  { day: "Mon", temps: [20, 22, 25] },
  { day: "Tue", temps: [18, 20, 19] },
  { day: "Wed", temps: [25, 27, 30] },
  { day: "Thu", temps: [19, 21, 20] },
  { day: "Fri", temps: [22, 24, 23] },
];
const dayWeather = new DayWeather();

dayWeather.average(weatherData);
