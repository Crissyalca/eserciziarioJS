// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"

function findLongestSubstring(string) {
  let longest = "";
  let current = "";
  for (let i = 0; i < string.length; i++) {
    if (current.indexOf(string[i]) == -1) {
      //se tringa vuota
      current += string[i]; // aggiungi stringa acurrent
    } else {
      if (current.length > longest.length) {
        //se current è più lungo
        longest = current;
        i = string.indexOf(string[i]); //i =indice i di stringa
      }
    }
  }
  return longest;
}
console.log(findLongestSubstring("BBBBBBB"));
