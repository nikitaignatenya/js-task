function factorial(n, factRes) {
  for (let i = 1; i <= n; i++) {
    factRes *= i;
  }
  return factRes;
}
function printFactorial(f) {
  console.log(f);
}

const factorialResult = factorial(+prompt(), 1);
printFactorial(factorialResult);
