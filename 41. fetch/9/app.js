// 9. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://randomuser.me/api/, получала от сервера данные случайного пользователя и
// отображала основную информацию на странице (например: полное имя, email, телефон).

const button = document.createElement("button");
button.textContent = "Button";
document.querySelector("body").appendChild(button);

button.addEventListener("click", async () => {
  const getinf = await fetch("https://randomuser.me/api/", { method: "GET" });
  const resInf = await getinf.json();
  resInf.results.forEach((el) => {
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p2.textContent = `${el.name.title} ${el.name.first} ${el.name.last}`;
    console.log(el.name);
    p.textContent = el.phone;
    p1.textContent = el.gender;
    document.querySelector("body").appendChild(p2);
    document.querySelector("body").appendChild(p);
    document.querySelector("body").appendChild(p1);
  });
});

// const obj = {
//   results: [
//     {
//       gender: "female",
//       name: {
//         title: "Miss",
//         first: "Eileen",
//         last: "Richardson",
//       },
//       location: {
//         street: {
//           number: 4736,
//           name: "Brown Terrace",
//         },
//         city: "Orange",
//         state: "Northern Territory",
//         country: "Australia",
//         postcode: 1029,
//         coordinates: {
//           latitude: "-83.4541",
//           longitude: "53.8069",
//         },
//         timezone: {
//           offset: "-10:00",
//           description: "Hawaii",
//         },
//       },
//       email: "eileen.richardson@example.com",
//       login: {
//         uuid: "4c4170a4-1c53-4af9-a022-544b7a1b6860",
//         username: "blackgoose330",
//         password: "brigitte",
//         salt: "VvoP8KAc",
//         md5: "c0c065324321efe657e37d83a120efca",
//         sha1: "678765ce97924ffd9b3a6ea40e3ef35c72995de5",
//         sha256:
//           "088656e31ffaf95f58033504891864d694be1374c68f74bc39e0735e95b80589",
//       },
//       dob: {
//         date: "1958-12-02T13:16:25.525Z",
//         age: 66,
//       },
//       registered: {
//         date: "2017-02-23T04:41:10.254Z",
//         age: 8,
//       },
//       phone: "06-0735-4091",
//       cell: "0471-199-826",
//       id: {
//         name: "TFN",
//         value: "556771392",
//       },
//       picture: {
//         large: "https://randomuser.me/api/portraits/women/43.jpg",
//         medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
//         thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg",
//       },
//       nat: "AU",
//     },
//   ],
//   info: {
//     seed: "46a5ed12092cd14e",
//     results: 1,
//     page: 1,
//     version: "1.4",
//   },
// };
