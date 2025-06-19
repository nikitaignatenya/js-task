const utils = {
  data: "data?",
  show() {
    console.log(this.data);
  },
};
const items = {
  data: "data!",
};

utils.show();
utils.show.call(items);
