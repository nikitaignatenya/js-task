const check = (a, b, c) => {
  try {
    if (a + b < c || a + c < b || b + c < a)
      throw new Error("Невозмонжно создать треугольник");
    else {
      console.log(a + b + c);
    }
  } catch (error) {
    console.log(error);
  }
};

check(5, 4, 8);
