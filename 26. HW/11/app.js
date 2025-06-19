function sumTracker() {
  n = 0;
  return function () {
    return console.log((n += +prompt()));
  };
}

const add = sumTracker();

add();
add();
add();
add();
add();
add();
