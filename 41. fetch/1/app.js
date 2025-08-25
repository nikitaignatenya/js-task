// 1. Реализовать получение всех задач fetch('https://dummyjson.com/todos')

async function text() {
  const p = await fetch("https://dummyjson.com/todos", { method: "GET" });
  const inf = await p.json();
  console.log(inf);
}

text();
