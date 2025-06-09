const splitArray = (arr, str) => {
  arr = arr.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) str += arr[i].toUpperCase();
    else str += arr[i].toLowerCase();
  }
  return str;
};

const res = splitArray(prompt(), "");

console.log(res);
