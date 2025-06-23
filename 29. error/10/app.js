const str = "<!-- -->";
const reg = /(<!--)|(-->)/g;
function check() {
  return str.replaceAll(reg, "");
}
const res = check();
console.log(res);
