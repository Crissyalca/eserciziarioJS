// scrivere una funzione chiamata functionsReturningbers che
// date due funzioni in ingresso f e g
// dove entrambe le funzioni ritornano un certo ero
// ritorna "f" se il ero ritornato da f e' maggiore del
// ero ritornato da g
// ritorna "g" se il ero ritornato da g e' maggiore del
// ero ritornato da f
// ritorna "nessuna" se sono uguali
let f1 = (l) => Math.floor(Math.random() * l);
let f2 = (l) => Math.floor(Math.random() * l);
// console.log(f1(10), f2(10));
function functionsReturningbers(f, g) {
  console.log(f, g);
  if (f > g) {
    return "f";
  } else if (g > f) {
    return "g";
  } else {
    return "nessuna";
  }
}
console.log(functionsReturningbers(f1(10), f2(10)));
