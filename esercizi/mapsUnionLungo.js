// scrivere una funzione chiamata mapsUnion che
// date due mappe (in JS chiamate anche oggetti) in ingresso
// ritorni una mappa (o oggetto) che contenga tutte le chiavi e
// tutti i valori delle due mappe
// in caso di chiavi duplicate deve rimanere il valore della
// seconda mappa (o oggetto)

// e' una funzione che volendo si puo' scrivere in una riga sola
let firstMap = { 1: "a", 2: "b", 3: "c", 4: "d" };
let secondMap = { 4: "e", 5: "f", 6: "b", 7: "g" };
function mapsUnion(m1, m2) {
  let arrayDiMapUnita = Object.entries(m1).concat(Object.entries(m2));
  let mapNuova = {};
  for (let i = 0; i < arrayDiMapUnita.length; i++) {
    mapNuova[arrayDiMapUnita[i][0]] = arrayDiMapUnita[i][1];
  }
  return mapNuova;
}
console.log(mapsUnion(firstMap, secondMap));
