async function promiseGet() {
  const promise = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const resPromise = await promise.json();
  resPromise.forEach((el) => {
    document.querySelector(
      ".list"
    ).innerHTML += `<li>${el.title} <button class="deleteButton" onclick="deleteElements(
      ${el.id}, event
    )">Delete</button><button class="update" onclick="updateFunc(
      ${el.id}, event
    )">Update</button></li>`;
  });
}

promiseGet();

async function deleteElements(id, event) {
  const deletePromise = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  const deletePromiseRes = await deletePromise.json();
  console.log(deletePromiseRes);
  event.target.parentElement.style = "display: none;";
}

document.querySelector(".createButton").addEventListener("click", async () => {
  const obj = {
    title: document.querySelector(".newTitle").value,
  };
  const postPromise = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const resPost = await postPromise.json();
  document.querySelector(".list").innerHTML = `<li>${
    document.querySelector(".newTitle").value
  } <button class="deleteButton" onclick="deleteElements(
      ${resPost.id}, event
    )">Delete</button><button class="update" onclick="updateFunc(
      ${resPost.id}, event
    )">Update</button></li>`.concat(document.querySelector(".list").innerHTML);
  console.log(resPost);
});
async function updateFunc(id, event) {
  const obj = {
    title: document.querySelector(".newTitle").value,
  };
  const putPromise = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const resPut = await putPromise.json();
  console.log(resPut);
  event.target.parentElement.innerHTML = `${
    document.querySelector(".newTitle").value
  } <button class="deleteButton" onclick="deleteElements(
      ${resPut.id}, event
    )">Delete</button><button class="update" onclick="updateFunc(
      ${resPut.id}, event
    )">Update</button>`;
}
