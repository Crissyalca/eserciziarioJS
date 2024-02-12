// scrivere una funzione chiamata andGate che
// riceve in ingresso due booleani
// sfruttando la funzione nand che trovate sotto
// ritorni true solo se vengono passati true e true
// false altrimenti

// non si possono usare if, or, and, e not dentro la funzione andGate
// non si puo' cambiare la funzione nand

// ad esempio con true e true ritorna true
// ad esempio con true e false ritorna false
// ad esempio con false e true ritorna false
// ad esempio con false e false ritorna false
function nand(b1, b2) {
  return !(b1 && b2);
}

function andGate(b1, b2) {
  return nand(b1, b2) == false;
}
console.log(andGate(true, false));
