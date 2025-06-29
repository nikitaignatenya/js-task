const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");
console.log(li);

for (let i = 0; i < li.length; i++) {
  if (li[i].textContent.length < 3) {
    li[i].style.color = "red";
  }
}
