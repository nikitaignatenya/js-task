const obj = {
  game(age) {
    console.log((age += this.name));
  },
};
const rep = {
  name: "Nikita",
};
obj.game.call(rep, 22);
