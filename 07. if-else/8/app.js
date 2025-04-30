let num = prompt();

num = Number(num);
!isNaN(num) ? console.log(num.toFixed(2)) : console.log("не число");
