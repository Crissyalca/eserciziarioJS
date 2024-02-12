// scrivere una funzione chiamata filterString
// che prende in ingresso una funzione e una stringa
// la funzione filterString deve ritornare una nuova stringa
// le cui lettere sono presenti solo se
// l'applicazione della funzione alla i-esima lettera
// restituisce true

// ad esempio per l => l == "a" e "abc" deve
// ritornare "a"
// ad esempio per l => l == "c" e "bbbbb" deve
// ritornare ""
// ad esempio per l => l != "c"e "cabbac"  deve
// ritornare "abba"

function filterString(funx, str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (funx(str[i])) {
      result = result + str[i];
    }
  }
  return result;
}
console.log(filterString((l) => l != "c", "cabbac"));
