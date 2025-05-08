let a = prompt();

a = a.slice(0, a.lastIndexOf("/") + 1);
a == "https://" || a == "http://" ? console.log(true) : console.log(false);

console.log((a = a.slice(0, a.lastIndexOf("/") + 1)));
