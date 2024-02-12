// scrivere una funzione chiamata mapString
// che prende in ingresso una funzione e una stringa
// la funzione mapString deve ritornare una nuova stringa
// le cui lettere sono il risultato dell'applicazione
// della funzione all'i-esima lettera

// ad esempio per l => l + "a" e "bbb" deve
// ritornare "bababa"
// ad esempio per l => l e "bbb" deve
// ritornare "bbb"
// ad esempio per l => "-" + l + "-" e "abc" deve
// ritornare "-a--b--c-"

function mapString(funx, str) {
  let stringDiL = "";
  for (let i = 0; i < str.length; i++) {
    stringDiL = stringDiL + funx(str[i]);
  }
  return stringDiL;
}
console.log(mapString((l) => l + "a", "bnn"));
