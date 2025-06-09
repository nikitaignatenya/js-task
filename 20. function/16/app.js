const reverseStr = (str) => {
  return str.split("/").reverse().join("-");
};
const res = reverseStr(prompt());
console.log(res);
