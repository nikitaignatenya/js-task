const reverseDate = (...a) => a.reverse().join("-");
let day = prompt("Число");
let month = prompt("Месяц");
let year = prompt("Год");
const res = reverseDate(day, month, year);
console.log(res);
