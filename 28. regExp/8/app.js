let str = "hello";
let reg = /(A)|(E)|(I)|(O)|(U)|(Y) /gi;

function check() {
  try {
    if (!isNaN(str)) throw new Error("Str не строка");
  } catch (error) {
    console.log(error);
  }
  try {
    console.log(str.replaceAll(reg, ""));
  } catch (error) {
    console.log(error);
  }
}
check();
