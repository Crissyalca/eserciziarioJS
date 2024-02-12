// scrivere una funzione chiamata intersection che
// dati due array di interi
// ritorni un array che rappresenti l'intersezione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna []
// ad esempio con [1,2] e [2,3] ritorna [2]

function intersection(a, b) {
  let intersectionArr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        intersectionArr.push(a[i]);
      }
    }
  }
  return intersectionArr;
}
console.log(intersection([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 13, 6, 8, 10]));
