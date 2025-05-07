let a = prompt();

for (let i = 1; i < a; i += 1) {
  !isNaN(a) && i % 3 == 0 ? console.log(i) : console.log("Не число");
}
