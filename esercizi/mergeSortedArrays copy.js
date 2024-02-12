// scrivere una funzione chiamata mergeSortedArrays che
// dati due array ordinati in ingresso
// ritorni un unico array ordinato

// non si puo' usare il metodo sort

// ad esempio per [1,2,3] e [4,5] ritorna [1,2,3,4,5]
// ad esempio per [5,9] e [1,6,7] ritorna [1,5,6,7,9]

function mergeSortedArrays(arr1, arr2) {
  let ordered = [];
  count = 0;

  let shorter = arr1.length < arr2.length ? arr1 : arr2;
  let longer = arr1.length < arr2.length ? arr2 : arr1;
  for (let i = 0; i < shorter.length || count < shorter.length; i++) {
    if (arr1[i] < arr2[count]) {
      ordered.push(arr1[i]);
    } else {
      ordered.push(arr2[count]);
      count++;
    }
  }
  let n = longer.length - shorter.length;
  for (let i = 0; i < longer.length; i++) {
    ordered.push(longer[i]);
  }
  return ordered;
}

console.log(mergeSortedArrays([1, 20], [6, 7, 8, 9, 30]));
