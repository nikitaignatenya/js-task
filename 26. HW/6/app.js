const sum = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
};

const res = sum(+prompt())(+prompt())(+prompt());
console.log(res);
