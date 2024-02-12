// scrivere una funzione chiamata anagrams che
// data una parola e una lista di parole
// ritorni un array formato dalle parole che sono anagrammi
// della parola data

// ad esempio con "ciao" e ["caio", "cio", "oiac", "bye"] ritorna
// ["caio", "oiac"]
//contare le lettere che sono presenti e toglierle

let string = "patata";
let possible = ["patato", "apatat", "pata", "pota", "ttaaaa"];
function anagrams(word, maybeAnagrams) {
  let anagramsArray = [];
  let wordMap = mapWord(word);
  let keyWord = Object.keys(wordMap);

  for (let i = 0; i < maybeAnagrams.length; i++) {
    let compare = maybeAnagrams[i];
    let compareMap;
    let count = keyWord.length;

    if (compare.length == word.length) {
      compareMap = mapWord(compare);

      for (let j = 0; j < keyWord.length; j++) {
        if (wordMap[keyWord[j]] == compareMap[keyWord[j]]) {
          count--; //oppure senza count
          //con wordMap[keyWord[j]]--
        }
      }
      if (count == 0) {
        anagramsArray.push(compare);
      }
    }
  }

  return anagramsArray;
}
console.log(anagrams(string, possible));
// if (itDiArray.indexOf(word[i]) && word.indexOf(itDiArray[i])){
function mapWord(word) {
  let wordM = {};
  for (let i = 0; i < word.length; i++) {
    if (wordM[word[i]]) {
      wordM[word[i]]++;
    } else {
      wordM[word[i]] = 1;
    }
  }
  return wordM;
}
