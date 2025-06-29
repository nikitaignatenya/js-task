// 6. Создайте в HTML элемент <div class="card"> и добавьте внутрь него через JS:
// Заголовок (<h3>) с названием товара. Параграф (<p>) с описанием. Кнопку (<button>) с текстом
// «Купить»

const card = document.getElementById("card");

const h3 = document.createElement("h3");
h3.textContent = "Перфоратор";
card.appendChild(h3);

const p = document.createElement("p");
p.textContent = "10000 ВТ";
card.appendChild(p);

const button = document.createElement("button");
button.textContent = "Купить";
card.appendChild(button);
