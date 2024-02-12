// scrivere una funzione chiamata occurrencies
// che prende in ingresso una stringa,
// la funzione deve ritornare le occorrenze di tutte le lettere
// nella stringa, ordinate in modo crescente

// ad esempio per "abbaca" deve ritornare [1,2,3]
// ad esempio per "caccia" deve ritornare [1,2,3]
// ad esempio per "bisaccia" deve ritornare [1,1,2,2,2]
function occurrencies(word) {
  let wordMap = {};
  console.log(wordMap);
  for (let i = 0; i < word.length; i++) {
    if (wordMap[word[i]]) {
      wordMap[word[i]]++;
    } else {
      wordMap[word[i]] = 1;
    }
  }
  console.log(wordMap);
  let wordArray = Object.values(wordMap);
  wordArray.sort();

  return wordArray;
}
console.log(occurrencies("bisaccia"));
