const firstWord = prompt();
const secondWord = prompt();

const firstRes = (f, s) =>
  f.split("").sort().join() == s.split("").sort().join() ? true : false;

const final = firstRes(firstWord, secondWord);
console.log(final);

function checkAnn(a, b) {
  if (a.split("").sort().join() == b.split("").sort().join()) {
    return true;
  } else return false;
}

const secRes = checkAnn(firstWord, secondWord);

console.log(secRes);
