function doFactorial(num, arr) {
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(`${num}! = ${arr.join("*")}`);
}

doFactorial(+prompt(), []);
