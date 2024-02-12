// scrivere una funzione chiamata union che
// dati due array di interi
// ritorni un array che rappresenti l'unione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna [1,2,3,4,5,6]

function union(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(union([1, 2, 3, 4], [5, 6, 7, 8]));
