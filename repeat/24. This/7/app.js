const obj = {
  brand: "Toyota",
  model: "Corolla",
  year: 2000,
  describeCar() {
    console.log(this.brand, this.model, this.year);
  },
};

obj.describeCar();
