// 3) Dato un array di stringhe ognuna contenente una sola lettera
// ritornare un nuovo array che contenga la distanza tra lettere vicine.
// Ad esempio per ["a", "c", "f"] deve ritornare [2, 3]
// perche' la "a" dista 2 dalla "c", la "c" dista 3 dalla "f".
// Ad esempio per ["e", "o", "z"] deve ritornare [8, 9]
//  perche' la "e" dista 8 dalla "o", la "o" dista 9 dalla "z".
// Punti extra per array tipo ["e", "o", "z", "f", "h"]
// che come vedete ricominciano daccapo.
let a1 = ["e", "o", "z"];
let a2 = ["e", "o", "z", "f", "h"];
function distanceAZ(arr) {
  let distanceArray = [];
  for (let i = 1; i < arr.length; i++) {
    let oneDistance = trovainAlfabeto(arr[i - 1], arr[i]);
    distanceArray.push(oneDistance);
  }
  return distanceArray;
}
console.log(distanceAZ(a2));
function trovainAlfabeto(l1, l2) {
  let alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let indexOcc;
  let indexPre;
  let countValue = 2;
  for (let i = 0; countValue > 0; i++) {
    if (l1 == alfabeto[i]) {
      indexPre = i;
      countValue--;
    }
    if (l2 == alfabeto[i]) {
      indexOcc = i;
      countValue--;
    }
  }

  let count;
  if (indexPre <= indexOcc) {
    count = indexOcc - indexPre;
  } else {
    count = alfabeto.length - indexPre + indexOcc;
  }

  return count;
}
// console.log(trovainAlfabeto("o", "b"));
