// scrivere una funzione chiamata concatAll che
// dato in ingresso un numero variabile di array
// ritorni un nuovo array che e' la concatenazione di tutti gli array
// passati
// ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
// ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
// ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]
function concatAll(...arrs) {
  let conc = [];
  for (let i = 0; i < arrs.length; i++) {
    conc.concat(arrs[i]);
  }
  return conc;
}
console.log(concatAll([1, 2, 3], [1, 2], [3]));
