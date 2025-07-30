// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
// анаграммами. Добавить проверки на ввод

class Anagram {
  word = prompt("Слово");
  anam = prompt("Анограма");
  check() {
    if (this.word.length !== this.anam.length) return false;
    return (
      this.word.split("").sort().join("") == this.anam.split("").sort().join("")
    );
  }
}

const anagram = new Anagram();

const logRes = anagram.check();
console.log(logRes);
