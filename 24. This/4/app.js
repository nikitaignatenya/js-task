const obj = {
  width: 32,
  height: 23,
  getArea() {
    console.log(this.width * this.height);
  },
};

obj.getArea();
