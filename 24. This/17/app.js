const logger = {
  logFullInfo(city, age) {
    console.log(`${this.name} из ${city}, ${age} годаы`);
  },
};

const user = {
  name: "Nikita",
};

logger.logFullInfo.apply(user, ["Bragin", 23]);
