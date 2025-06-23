let array = [1, 2, 3];

function checkArr() {
  try {
    const checkEl = array.some((el) => {
      return typeof el == "string" ? true : false;
    });
    if (checkEl == true) throw new Error("Массив содержит строку");
    else console.log("Нет cтрок");
  } catch (error) {
    console.log(error);
  }
}

checkArr();
