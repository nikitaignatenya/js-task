let num = +prompt();
function checkNum() {
  try {
    if (isNaN(num) || num % 2 !== 0) throw new Error("Число нечётное");
    else console.log(num);
  } catch (error) {
    console.log(error);
  }
}

checkNum();
