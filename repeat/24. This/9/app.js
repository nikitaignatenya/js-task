const obj = {
  width: +prompt("Ширина"),
  height: +prompt("Высота"),
  getArea() {
    return this.width * this.height;
  },
};

const res = obj.getArea();
console.log(res);
