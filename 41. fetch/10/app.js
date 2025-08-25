// 10. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем название страны, отправляла GET-запрос по ссылке
// http://universities.hipolabs.com/search?country=... и отображала на странице список
// университетов с их названиями и веб-сайтами

const input = document.createElement("input");
document.querySelector("body").appendChild(input);

const button = document.createElement("button");
button.textContent = "Button";
document.querySelector("body").appendChild(button);

button.addEventListener("click", async () => {
  const getInf = await fetch(
    `http://universities.hipolabs.com/search?country=${input.value}`,
    { method: "GET" }
  );
  const resInf = await getInf.json();
  const ul = document.createElement("ul");
  document.querySelector("body").appendChild(ul);

  resInf.forEach((el) => {
    const li2 = document.createElement("li");
    const li = document.createElement("li");
    li.textContent = el.name;
    ul.appendChild(li);
    li2.textContent = el.web_pages.join(" ");
    ul.appendChild(li2);
  });
});

const arr = [
  {
    domains: ["academy.mia.by"],
    web_pages: ["https://www.amia.by/"],
    name: "Academy of the Ministry of Internal Affairs of the Republic of Belarus",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["baa.by"],
    web_pages: ["https://baa.by/"],
    name: "Belarusian State Agricultural Academy",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["batu.edu.by"],
    web_pages: ["https://www.bsatu.by/"],
    name: "Belarusian State Agrarian Technical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["belsut.gomel.by"],
    web_pages: ["https://www.bsut.by/"],
    name: "Belarusian State University of Transport",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bgam.edu.by"],
    web_pages: ["https://bgam.by/"],
    name: "Belarusian State Academy of Music",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bntu.by"],
    web_pages: ["https://bntu.by/"],
    name: "Belarusian National Technical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["brsu.brest.by"],
    web_pages: ["https://www.brsu.by/"],
    name: "Brest State University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bru.mogilev.by"],
    web_pages: ["http://en.bru.by/"],
    name: "Belarusian-Russian University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bseu.by"],
    web_pages: ["http://bseu.by/"],
    name: "Belarusian State Economic University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bsmu.by"],
    web_pages: ["https://bsmu.by/"],
    name: "Belarusian State Medical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bspu.unibel.by"],
    web_pages: ["https://bspu.by/"],
    name: "Belarusian State Pedagogical University M. Tanka",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bstu.by"],
    web_pages: ["https://www.bstu.by/"],
    name: "Brest State Technical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bstu.unibel.by"],
    web_pages: ["https://belstu.by/"],
    name: "Belarusian State Technological University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bsu.by"],
    web_pages: ["https://bsu.by/"],
    name: "Belarusian State University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["bsuir.by"],
    web_pages: ["https://www.bsuir.by/"],
    name: "Belarusian State University of Informatics and Radioelectronics",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["buk.by"],
    web_pages: ["https://www.buk.by/"],
    name: "Belarusian State University of Culture and Arts",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["grsmu.by"],
    web_pages: ["http://www.grsmu.by/"],
    name: "Grodno State Medical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["grsu.by"],
    web_pages: ["https://www.grsu.by/"],
    name: "Grodno State University Yanka Kupaly",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["gstu.gomel.by"],
    web_pages: ["https://www.gstu.by/"],
    name: "Gomel State Technical University Pavel Sukhoi",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["gsu.unibel.by"],
    web_pages: ["https://gsu.by/"],
    name: "Gomel State University Francisk Scarnia",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["iseu.by"],
    web_pages: ["https://www.iseu.bsu.by/"],
    name: "International Sakharov Environmental University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["kii.gov.by"],
    web_pages: ["https://ucp.by/"],
    name: "Institute for Command Engineers of The Ministry for Emergency Situations",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["meduniver.gomel.by"],
    web_pages: ["https://gsmu.by/"],
    name: "Gomel State Medical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["mgpu.gomel.by"],
    web_pages: ["https://mspu.by/index.php/"],
    name: "Mozyr State Pedagogical Institute",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["miu.by"],
    web_pages: ["http://www.miu.by/"],
    name: "Minsk Institute of Management",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["mslu.by"],
    web_pages: ["https://mslu.by/"],
    name: "Minsk State Linguistic University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["msu.mogilev.by"],
    web_pages: ["https://msu.by/"],
    name: "Mogilev State University A.A. Kuleshov",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["pac.by"],
    web_pages: ["https://www.pac.by/"],
    name: "Academy of Public Administration of Belarus",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["psu.by"],
    web_pages: ["http://www.psu.by/"],
    name: "Polotsk State University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["uni-agro.grodno.by"],
    web_pages: ["https://inter.ggau.by/"],
    name: "Grodno State Agrarian University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["vgmu.vitebsk.by"],
    web_pages: ["https://www.vsmu.by/"],
    name: "Vitebsk State Medical University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["vsavm.com"],
    web_pages: ["https://www.vsavm.by/"],
    name: "Vitebsk State Academy of Veterinary Medicine",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["vstu.vitebsk.by"],
    web_pages: ["https://vstu.by/"],
    name: "Vitebsk State Technological University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
  {
    domains: ["vsu.by"],
    web_pages: ["https://vsu.by/"],
    name: "Vitebsk State University",
    country: "Belarus",
    alpha_two_code: "BY",
    "state-province": null,
  },
];
