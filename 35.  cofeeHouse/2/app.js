const button = document.querySelector("body button");
const input = document.querySelector("body input");

function addToDo() {
  const li = document.createElement("li");
  li.textContent = input.value;
  document.querySelector("body ul").appendChild(li);
  input.value = "";
}

button.addEventListener("click", () => addToDo());
