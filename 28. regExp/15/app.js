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
// function check(checkArr, newArr) {
//   try {
//     for (let i = 0; i < checkArr.length; i++) {
//       arr.forEach((el, l) => {
//         if (!isNaN(el)) throw new Error("Интервал содержит числа");
//         el === checkArr[i]
//           ? newArr.push(arr[l + 1].toUpperCase())
//             ? el.toLowerCase() == checkArr[i]
//             : newArr.push(arr[l + 1].toLowerCase())
//           : null;
//       });
//     }
//     newArr.slice(0, newArr.length - 1).forEach((el) => {
//       !checkArr.includes(el) ? console.log(el) : null;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// check(["V", "W", "Y"], []);

function check(array) {
  try {
    arr.forEach((el) => {
      if (!isNaN(el)) throw new Error("Число");
    });

    let newArr = arr.slice(
      arr.indexOf(array[0].toUpperCase()),
      arr.indexOf(array[array.length - 1].toUpperCase()) + 1
    );
    console.log(newArr);
    newArr.forEach((el) => {
      !array.includes(el) ? console.log(el) : null;
    });
  } catch (error) {
    console.log(error);
  }
}

check(["T", "U", "V", "W", "X", "Z"]);
