const reverseStr = (str) => str.split("").reverse().join("");
const printReverseStr = () => {
  let string = prompt();
  console.log(reverseStr(string));
};

printReverseStr();
