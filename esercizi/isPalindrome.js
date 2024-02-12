// scrivere una funzione chiamata isPalindrome che
// data una parola
// ritorni true se e' palindroma, false altrimenti

// ad esempio con "ciao" ritorna false
// ad esempio con "abba" ritorna true
// ad esempio con "ada" ritorna true
// ad esempio con "1234321" ritorna true
// ad esempio con "123321" ritorna true
// ad esempio con "123421" ritorna false

function isPalindrome(string) {
  let lunghezza = string.length % 2 == 0 ? string.length : string.length - 1;
  let n = 1;
  let count = lunghezza / 2;
  for (let i = 0; i < lunghezza / 2; i++) {
    if (string[i] == string[string.length - n]) {
      count--;
      n++;
    } else {
      break;
    }
  }

  return count == 0;
}
console.log(isPalindrome("123321"));
