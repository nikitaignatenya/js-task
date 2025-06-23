const arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function check(checkArr, newArr) {
  try {
    for (let i = 0; i < checkArr.length; i++) {
      arr.forEach((el, l) => {
        if (!isNaN(el)) throw new Error("Массив содержит числа");
        el === checkArr[i]
          ? newArr.push(arr[l + 1].toUpperCase())
            ? el.toLowerCase() == checkArr[i]
            : newArr.push(arr[l + 1].toLowerCase())
          : null;
      });
    }
    newArr.slice(0, newArr.length - 1).forEach((el) => {
      !checkArr.includes(el) ? console.log(el) : null;
    });
  } catch (error) {
    console.log(error);
  }
}

check(["O", "Q", "R", "S"], []);
