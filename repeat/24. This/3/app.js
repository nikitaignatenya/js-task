const isEven = (n) => (n % 2 == 0 ? true : false);
const printEvenCheck = (res) => console.log(res);
const firstRes = isEven(+prompt());
printEvenCheck(firstRes);
