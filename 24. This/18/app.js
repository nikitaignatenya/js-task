const formatter = {
  format() {
    console.log(`${this.firstname} ${this.lastname}`);
  },
};

const firstpPers = {
  firstname: "Nikita",
  lastname: "Ignatenya",
};

const secondPers = {
  firstname: "Nikita",
  lastname: "Ignarenya",
};

formatter.format.call(firstpPers);
formatter.format.apply(secondPers);
