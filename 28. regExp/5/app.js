let n = +prompt();
function checkEl(arr) {
  try {
    if (isNaN(n)) throw new Error("N-не число");

    for (let i = 0; i < n; i++) {
      arr.push(Math.random() * 100);
    }
    arr.forEach((el) => {
      if (isNaN(el)) throw new Error("Не число");
      if (el < 0) throw new Error("Число меньше нуля");
    });
    console.log(arr);
  } catch (error) {
    console.log(error);
  }
}

checkEl([]);
