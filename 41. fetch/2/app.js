// 2. Реализовать получение всех задач fetch('https://dummyjson.com/todos'). Все элементы
// отобразить в html

async function test() {
  const get = await fetch("https://dummyjson.com/todos", { method: "GET" });
  const res = await get.json();
  res.todos.forEach((el) => {
    const p = document.createElement("p");
    p.textContent = `${el.todo}`;
    document.querySelector("body").appendChild(p);
  });
}

test();
