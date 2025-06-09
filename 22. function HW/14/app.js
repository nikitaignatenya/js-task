const isStrongPassword = (pwd) => (pwd.length > 8 ? true : false);
const registerUser = (name) => {
  return isStrongPasswordRes == true
    ? `Пользователь ${name} зарегестрирован`
    : "Слабый пароль";
};

const password = prompt("Пароль");
const isStrongPasswordRes = isStrongPassword(password);
const registerUserRes = registerUser(prompt("Имя"));
console.log(registerUserRes);
