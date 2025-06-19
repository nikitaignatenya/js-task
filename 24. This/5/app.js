const user = {
  role: prompt("admin / user"),
  checkAccess(name) {
    user.role == "admin"
      ? console.log(`Сообщение для админ --> ${name}: полный доступ`)
      : console.log(`Сообщение для админ --> ${name}: ограниченный доступ`);
  },
};

user.checkAccess(prompt());
