/// scrivere una funzione chiamata arraySwap che
// dato un array di interi
// ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
// e il valore alla posizione i + 1 sono invertiti di posizione

// ad esempio: con [5, 6] ritornerebbe [6, 5]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
// ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
// essere scambiato con niente siccome l'array e' terminato

function arraySwap(arr) {
  let arraySwap1 = [];
  for (let i = 1; i < arr.length; i += 2) {
    arraySwap1.push(arr[i]);
    arraySwap1.push(arr[i - 1]);
  }
  if (arr.length % 2 != 0) {
    arraySwap1.push(arr[arr.length - 1]);
  }
  return arraySwap1;
}
console.log(arraySwap([2, 1, 4, 3, 6, 5, 7, 8, 9]));
