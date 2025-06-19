const utils = {
  showName() {
    console.log(this.name);
  },
};

const client = {
  name: "Nikita",
};

utils.showName.call(client);
