function secretMessage(msg) {
  return function () {
    return msg;
  };
}

const res = secretMessage(prompt());
res();
