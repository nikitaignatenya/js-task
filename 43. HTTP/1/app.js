async function getInf() {
  const get = await fetch("https://dummyjson.com/todos", { method: "GET" });
  const resInf = await get.json();
  resInf.todos.forEach((el) => {
    const ul = document.querySelector("body .list ul");
    ul.innerHTML += `<li style ="margin-top: 10px"; class="inpDel">${el.todo}<button onclick="deleteEl(${el.id}, event)"; class="delete"; style ="margin-left: 10px">Delete</button></li>`;
  });
  return resInf;
}
getInf();

document.querySelector(".create").addEventListener("click", async () => {
  const postInf = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: document.querySelector("input").value,
      completed: false,
      userId: 5,
    }),
  });
  const json = await postInf.json();
  console.log(json);
});

const delBut = document.querySelectorAll(".delete");
const delInp = document.querySelectorAll(".inpDel");

async function deleteEl(p, event) {
  const delInf = await fetch(`https://dummyjson.com/todos/${p}`, {
    method: "DELETE",
  });
  const resInf = await delInf.json();
  console.log(resInf);
  event.target.parentElement.style = "display: none;";
}
