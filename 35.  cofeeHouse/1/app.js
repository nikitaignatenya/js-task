const items = [
  {
    id: 1,
    category: "Фрукты",
    name: "Яблоко",
    description: "Сладкое и сочное яблоко.",
    class: "item_1",
  },
  {
    id: 2,
    category: "Фрукты",
    name: "Банан",
    description: "Полезный и питательный банан.",
    class: "item_2",
  },
  {
    id: 3,
    category: "Овощи",
    name: "Морковь",
    description: "Свежая и хрустящая морковь.",
    class: "item_3",
  },
  {
    id: 4,
    category: "Овощи",
    name: "Огурец",
    description: "Сочный и освежающий огурец.",
    class: "item_4",
  },
  {
    id: 5,
    category: "Ягоды",
    name: "Клубника",
    description: "Сладкая и ароматная клубника.",
    class: "item_5",
  },
  {
    id: 6,
    category: "Ягоды",
    name: "Черника",
    description: "Полезная и вкусная черника.",
    class: "item_6",
  },
];

const fruitsButton = document.querySelector(".fruits");
const vegetablesButton = document.querySelector(".vegetables");
const berriesButton = document.querySelector(".berries");
const container = document.querySelector(".container");
const modal = document.createElement("div");
modal.className = "modal";

function showRes(param) {
  container.innerHTML = "";
  items
    .filter((el) => (el.category.includes(param) ? true : false))
    .forEach((el) => {
      // const item = document.createElement("div");
      // container.appendChild(item);
      container.innerHTML += `<div class="${el.class}"><h2>${el.category}</h2><p>${el.name}</p></div>`;
      const itemClass = document.querySelector(`.${el.class}`);
      console.log(itemClass);
      itemClass.addEventListener("click", () => {
        container.appendChild(modal);
        modal.innerHTML = `<h2>${el.name}</h2><p>${el.description}</p><p>${el.category}</p><button class="close">Закрыть</button>`;
        const close = document.querySelectorAll(".close");
        close.forEach((el) =>
          el.addEventListener("click", () => container.removeChild(modal))
        );
      });
    });
}

fruitsButton.addEventListener("click", () => showRes("Фрукты"));
vegetablesButton.addEventListener("click", () => showRes("Овощи"));
berriesButton.addEventListener("click", () => showRes("Ягоды"));
