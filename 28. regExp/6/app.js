function check(num) {
  try {
    if (isNaN(num)) throw new Error("num - не число");
  } catch (error) {
    console.log(error);
  }
  try {
    const toMap = String(num)
      .split("")
      .map((el) => {
        if (el < 0) throw new Error("El - не число");
        else return el ** 2;
      });
    console.log(toMap.join(""));
  } catch (error) {
    console.log(error);
  }
}
check(prompt());
