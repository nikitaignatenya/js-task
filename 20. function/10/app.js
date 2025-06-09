function checkPal(mainWord) {
  if (mainWord == mainWord.split("").reverse().join("")) {
    return true;
  } else return false;
}

const res = checkPal(prompt());

console.log(res);
