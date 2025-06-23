let str = "ignatenya123@gmail.com";
function checkSymbol() {
  try {
    if (!str.includes("@")) throw new Error("Нету собаки");
    else console.log(true);
  } catch (error) {
    console.log(error);
  }
}
checkSymbol();
