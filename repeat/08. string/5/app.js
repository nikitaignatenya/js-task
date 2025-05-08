let a = prompt();

(a.includes("@") && a.endsWith(".com")) || a.endsWith(".ru")
  ? console.log(true)
  : console.log(false);
