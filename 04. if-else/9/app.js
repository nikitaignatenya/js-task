let num = +prompt("Число");

if (num > 9 && num < 99) {
  console.log("Двузначное");
} else if (num < 9) {
  console.log("Однозначное");
} else if (num > 99) {
  console.log("многозначное");
} else if ( num > 999) { 
    console.log("Многозначное");
}
