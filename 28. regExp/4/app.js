const str = "ignatenya123@gmail.com";

const reg = /^\w+@\w+\.\w+/;

function checkStr() {
  try {
    if (reg.test(str)) console.log(true);
    else {
      throw new Error("Ошибочка вышла");
    }
  } catch (error) {
    console.log(error);
  }
}

checkStr();
