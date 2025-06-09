let obj = {
  Nikita: "name1",
  Kirill: "name2",
};
let has = prompt();

const arr = Object.keys(obj);

const res = arr.some(function (el) {
  if (el == has) return true;
  else return false;
});

console.log(res);
