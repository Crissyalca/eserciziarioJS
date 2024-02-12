// scrivere una funzione chiamata mergeSortedArrays che
// dati due array ordinati in ingresso
// ritorni un unico array ordinato

// non si puo' usare il metodo sort

// ad esempio per [1,2,3] e [4,5] ritorna [1,2,3,4,5]
// ad esempio per [5,9] e [1,6,7] ritorna [1,5,6,7,9]

function mergeSortedArrays(arr1, arr2) {
  let ordered = [];
  let a1 = arr1;
  let a2 = arr2;

  //   let shorter = a1.length < a2.length ? a1 : a2;
  //   let longer = a1.length < a2.length ? a2 : a1;
  while (a1.length > 0 && a2.length > 0) {
    if (a1[0] < a2[0]) {
      ordered.push(a1[0]);
      a1.shift(); //
    } else {
      ordered.push(a2[0]);
      a2.shift(); //incrementare indice
    }
  }
  if (a1.length > 0) {
    while (a1.length > 0) {
      ordered.push(a1[0]);
      a1.shift();
    }
  } else {
    while (a2.length > 0) {
      ordered.push(a2[0]);
      a2.shift();
    }
  }
  return ordered;
}
console.log(mergeSortedArrays([1, 20], [6, 7, 8, 9, 30]));
