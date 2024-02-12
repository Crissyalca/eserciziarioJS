// scrivere una funzione chiamata fattoriale che
// dato un numero in ingresso
// ritorni il fattoriale di quel numero

// ad esempio per 3 deve ritornare 6
// ad esempio per 4 deve ritornare 24

// https://en.wikipedia.org/wiki/Factorial

function fattoriale(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result = result * i;
  }
  return result;
}
console.log(fattoriale(5));
