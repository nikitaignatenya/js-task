let num = +prompt("Первое");
let numtwo = +prompt("Второе чисо");

if (Math.abs(num) == Math.abs(numtwo)) {
    if ((num < 0 && numtwo > 0) || (num > 0 && numtwo < 0)) {
    console.log("противоположные");
    } else { 
        console.log("не противоположные");
    }
  }
