// 5. Через JS создайте элемент <ul> с тремя элементами списка <li> и добавьте его в документ
// HTML

// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// li1.textContent = "Hi";
// li2.textContent = "Hi";
// li3.textContent = "Hi";

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

const ul = document.createElement("ul");
document.body.appendChild(ul);
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = "Hi";
  ul.appendChild(li);
}
