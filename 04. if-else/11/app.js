let num1 = +prompt('Введите первое число')
let num2 = +prompt('Введите второе число')

if ( num1 > num2) { 
    console.log(Math.max(num1, num2) - Math.min(num1, num2));
} else if (num2 > num1) { 
    console.log(Math.max(num1, num2) + Math.min(num1, num2));
}