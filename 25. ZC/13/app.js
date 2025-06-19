function formatDate(separator) {
  return function (day) {
    return function (month) {
      return function (year) {
        console.log(`${day}${separator}${month}${separator}${year}`);
      };
    };
  };
}

formatDate("/")("12")("04")("2002");
