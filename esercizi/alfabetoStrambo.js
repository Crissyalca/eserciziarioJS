// scrivere una funzione chiamata alfabetoStrambo che
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi
// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna
// "funzionara soloro con vocaliri allara finere"

function alfabetoStrambo(s) {
  let result = "";
  let arrayDiS = s.split(" ");
  let resultArray = [];
  for (let i = 0; i < arrayDiS.length; i++) {
    let ultimoIndice = arrayDiS[i].length - 1;
    let ultimaLettera = arrayDiS[i][ultimoIndice];
    console.log(ultimaLettera);
    let wordRV = "";
    if (
      ultimaLettera == "a" ||
      ultimaLettera == "e" ||
      ultimaLettera == "i" ||
      ultimaLettera == "o" ||
      ultimaLettera == "u"
    ) {
      wordRV = arrayDiS[i] + "r" + ultimaLettera;

      resultArray.push(wordRV);
      console.log(resultArray);
    } else {
      resultArray.push(arrayDiS[i]);
    }
  }
  result = resultArray.join(" ");
  return result;
}
console.log(alfabetoStrambo("funziona solo con vocali alla fine"));
