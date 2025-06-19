const obj = {
  orderId: 2134,
  status: "active",
  printStatus() {
    console.log(`Заказ ${this.orderId} : ${this.status}`);
  },
};

obj.printStatus();
