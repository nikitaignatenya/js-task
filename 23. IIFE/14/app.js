const chekSymb = (str, arr) => {
  str = str.split("");
  str.forEach(function (el, i) {
    if (str.indexOf(el) !== i) {
      arr.push(el);
    }
  });

  let arr2 = [];
  str.forEach((el) => {
    if (!arr.includes(el)) {
      arr2.push(el);
    } else arr2;
  });
  console.log(...arr2);
};

chekSymb(prompt(), []);
