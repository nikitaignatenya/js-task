let arrayObj = [
  { id: 1, label: "JavaScript", category: "programmingLanguages", priority: 1 },
  { id: 2, label: "TypeScript", category: "programmingLanguages", priority: 1 },
  { id: 2, label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: 4, label: "Java", category: "programmingLanguages", priority: 3 },
  { id: 5, label: "GO", category: "programmingLanguages", priority: 3 },
];

function checkObjId() {
  try {
    const filterObj = arrayObj.filter((el) => {
      if (typeof el.id == "string") throw new Error("id - строка");
      if (el.id < 0) throw new Error("id - меньше нуля");
      return el.id % 2 == 0;
    });
    console.log(filterObj);
  } catch (error) {
    console.log(error);
  }
}

checkObjId();
