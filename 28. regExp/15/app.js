// const arr = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
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

// function check(array) {
//   try {
//     arr.forEach((el) => {
//       if (!isNaN(el)) throw new Error("Число");
//     });

//     let newArr = arr.slice(
//       arr.indexOf(array[0].toUpperCase()),
//       arr.indexOf(array[array.length - 1].toUpperCase()) + 1
//     );
//     for (let i = 0; i < newArr.length; i++) {
//       if (
//         !array.includes(newArr[i].toLowerCase()) &&
//         array[0] == array[0].toLowerCase()
//       ) {
//         console.log(newArr[i].toLowerCase());
//       } else if (
//         !array.includes(newArr[i]) &&
//         array[0] == array[0].toUpperCase()
//       ) {
//         console.log(newArr[i].toUpperCase());
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// check(["a", "b", "c", "d", "f"]);

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let arr = ["a", "b", "c", "d", "f"];

// const findSymbol = () => {
//   try {
//     if (arr.length === 0) throw new Error("массив пуст");
//     let firstIndex = alphabet.indexOf(arr[0].toLowerCase());
//     let lastIndex = alphabet.indexOf(arr[arr.length - 1].toLowerCase());
//     let newStr = alphabet.slice(firstIndex, lastIndex + 1);
//     let resStr = "";
//     for (let i = 0; i < newStr.length; i++) {
//       if (
//         !arr.join("").toLowerCase().includes(newStr[i]) &&
//         arr[0] == arr[0].toLowerCase()
//       ) {
//         resStr += newStr[i] + " ";
//       } else if (
//         !arr.join("").toLowerCase().includes(newStr[i]) &&
//         arr[0] == arr[0].toUpperCase()
//       ) {
//         resStr += newStr[i].toUpperCase() + "";
//       }
//     }
//     return resStr;
//   } catch (error) {
//     console.log(error);
//   }
// };

// let res = findSymbol();
// console.log(res);
