((num, fact) => {
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
})(+prompt(), 1);
