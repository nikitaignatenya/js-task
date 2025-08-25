// 3. Реализовать получение фактов про котов fetch('https://catfact.ninja/fact) и результат отобразить
// в <p>

async function test() {
  const inf = await fetch("https://catfact.ninja/fact", { method: "GET" });
  const resInf = await inf.json();
  const p = document.createElement("p");
  p.textContent = resInf.fact;
  document.querySelector("body").appendChild(p);
}
test();
