const isEven = (num) => (num % 2 == 0 ? true : false);
const printEvenCheck = () => {
  let n = prompt();
  const firstRes = isEven(n);
  return firstRes == true ? "чётное" : `нечётное`;
};

const res = printEvenCheck();
console.log(res);
