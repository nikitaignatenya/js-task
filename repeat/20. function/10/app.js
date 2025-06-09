const res = function (str) {
  if (str == str.split("").reverse().join("")) console.log(true);
  else return console.log(false);
};

res(prompt());

