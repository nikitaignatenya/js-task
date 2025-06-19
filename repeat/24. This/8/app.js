const userRole = prompt("должность").toLowerCase();
const user = {
  role: userRole,
  checkAccess(name) {
    this.role == "admin"
      ? console.log(`${name}: полный досутп`)
      : this.role == "user"
      ? console.log(`${name}: ограниченный досутп`)
      : console.log(`${name}: кто ты?`);
  },
};

user.checkAccess(prompt("Имя"));
