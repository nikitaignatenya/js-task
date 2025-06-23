let array = [-1, 2, -3, 4];
function check() {
  try {
    array.every((el) => {
      if (isNaN(el)) throw new Error("В массиве есть строки");
    });
    const res = array.map((el) => (el < 0 ? 0 : el));
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

check();
