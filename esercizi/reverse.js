// scrivere una funzione chiamata reverse che
// data una stringa in ingresso
// ritorni la stringa inversa

// ad esempio "ciao" deve ritornare "oaic"
// ad esempio "Jessica" deve ritornare "acisseJ"

function reverse(string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString + string[i];
  }
  return reverseString;
}
console.log(reverse("allafraf"));
