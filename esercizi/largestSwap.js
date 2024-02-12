// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti

// ad esempio per 27 deve ritornare false perche' posso invertire
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore

function largestSwap(n) {
  let num = n.toString();
  let nReverse = parseInt(num[1], num[0]);

  return n > nReverse;
}
console.log(largestSwap(12));
