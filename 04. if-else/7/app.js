let num1 = +prompt("Первое");
let num2 = +prompt("Второе");
let num3 = +prompt("Третье");

if ( num1 > num2 && num1> num3) { 
    console.log(num1);
} else if ( num2 > num1 && num2> num3) { 
    console.log(num2);
} else if ( num3 > num1 && num3> num1) { 
    console.log(num3);
}

if (((Math.max(num1, num2, num3) > num1) && (Math.max(num1, num2, num3) > num2)) ||  ((Math.max(num1, num2, num3) > num2) && (Math.max(num1, num2, num3) > num3)) ||  ((Math.max(num1, num2, num3) > num1) && (Math.max(num1, num2, num3) > num2))) { 
    console.log(Math.max(num1, num2, num3));
}