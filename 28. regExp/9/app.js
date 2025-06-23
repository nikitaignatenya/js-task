function nok(n1, n2) {
  try {
    if (isNaN(n1) && isNaN(n2) && Number.isInteger(n1) && Number.isInteger(n2))
      throw new Error("Введены не числа");
    let i = 1;
    function res() {
      if (i % n1 == 0 && i % n2 == 0) return console.log(i);
      i++;
      return res();
    }
    res();
  } catch (error) {
    console.log(error);
  }
}
nok(prompt(), prompt());
