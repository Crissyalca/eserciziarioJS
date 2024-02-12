// 1) Dato un array non vuoto riempito di soli numeri positivi,
// calcolare la frequenza massima con cui il numero piu' comune compare.
// Ad esempio per [1, 2, 1, 2, 3, 1] la frequenza massima e' 3
// perche' 1 compare 3 volte.
// A parita' di frequenza scegliere l'ultimo.

function frequency(arr) {
  let mapF = {};
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    mapF[letter] = (mapF[letter] || 0) + 1;
  }
  let max = 0;

  let frequencyKeys = Object.keys(mapF);
  console.log(mapF);
  for (let i = 0; i < frequencyKeys.length; i++) {
    let letterCurr = frequencyKeys[i];
    if (mapF[letterCurr] >= max) {
      max = mapF[letterCurr];
    }
  }
  return max;
}
let s = [1, 2, 2, 4, 5, 4, 6, 5, 5, 1];
let w = [1, 3, 4, 5, 7, 8, 1, 3, 3, 3, 3, 4, 5, 7, 8];
console.log(frequency(s));
console.log(frequency(w));
console.log(frequency([1, 2, 2, 2, 4, 4, 5, 4, 6, 5, 5, 1]));
