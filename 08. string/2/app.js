let string = prompt();

string == string.split("").reverse().join("")
  ? console.log(string.split("").reverse().join(""))
  : console.log("false");
