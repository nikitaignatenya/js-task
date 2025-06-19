const person = {
  firstName: "Nikita",
  lastName: "Ignatenya",
  fulName() {
    console.log(this.firstName, this.lastName);
  },
};

person.fulName();
