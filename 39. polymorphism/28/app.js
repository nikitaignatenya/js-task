// 4. Класс Player. Дан массив игроков — выведи имя игрока с наибольшим общим счётом.

// Выходные:
// const players = [
//   { name: "Alice", scores: [20, 20, 15] },
//   { name: "Bob", scores: [5, 8, 12, 7] },
//   { name: "Charlie", scores: [30, 5] },
// ];
// Выходные:
// [{ name: "Alice", scores: [20, 20, 15] }] - потому что 20 + 20 + 15 - наибольшая сумма

class Player {
  count = 0;
  constructor(players) {
    players.forEach((el) => {
      el.max = el.scores.reduce((sum, el) => (sum += +el), 0);
    });
    players.forEach((el) => {
      el.max > this.count ? (this.count = el.max) : this.count;
    });
    players.forEach((el) => {
      if (el.max == this.count) {
        delete el.max;
        console.log(el);
      }
    });
  }
}

const players = [
  { name: "Alice", scores: [20, 20, 15] },
  { name: "Bob", scores: [5, 8, 12, 7] },
  { name: "Charlie", scores: [30, 5] },
];
const player = new Player(players);
