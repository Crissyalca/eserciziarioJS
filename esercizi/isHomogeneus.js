// scrivere una funzione chiamata isHomogeneous che
// dato un array di elementi in ingresso
// ritorni true se l'array contiene elementi tutti dello stesso tipo
// o false altrimenti

function isHomogeneous(arr) {
  let value = true;
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[0] == typeof arr[i]) {
      value = true;
    } else {
      return false;
    }
  }
  return value;
}
console.log(isHomogeneous([1, 2, 3, 4, true, 5]));
