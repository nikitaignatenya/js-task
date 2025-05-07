let a = prompt();

a < 10
  ? console.log("Однозначное")
  : a >= 10 && a <= 99
  ? console.log("Двузначное")
  : a >= 100
  ? console.log("Многозначное")
  : console.log("ХЗ");
