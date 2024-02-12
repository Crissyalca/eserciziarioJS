// scrivere una funzione chiamata firstSum
// che prende in ingresso un array e un numero,
// la funzione deve ritornare la prima coppia di numeri la cui
// somma e' pari al numero passato come argomento

// suggerimento: per ritornare una coppia di numeri utilizzate
// un array, chiaramente a lunghezza 2

function firstSum(arr, n) {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] + arr[i] == n) {
        sum.push(arr[j], arr[i]);
        return sum;
      }
    }
  }
}
console.log(firstSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 16));
