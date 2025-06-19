const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
const printFactorial = () => {
  let n = +prompt();
  const firstRes = factorial(n);
  console.log(firstRes);
};

printFactorial();
