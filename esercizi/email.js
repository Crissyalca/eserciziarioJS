let email = [
  "edmond.dantes@marsiglia.fr",
  "edmond.dantes@chateudif.fr",
  "zatarra@luigivampa.fr",
  "diego@luigivampa.fr",
  "count.montecristo@marsiglia.fr",
  "mercedes@marsiglia.fr",
  "monsieur.dorleac@chateudif.fr",
  "fernando.mondego@morcef.fr",
];

function createMapping(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    let dominio = arr[i].split("@")[1];
    if (!res[dominio]) {
      res[dominio] = [];
    }
    res[dominio].push(arr[i]);
  }
  return res;
}
function getBiggest(mapping, exclude) {
  let biggest = mapping[Object.keys()[0]];
  let keys = Object.keys(mapping);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (exclude.indexOf(key) > -1) {
      continue;
    }
    if (mapping[key].length > mapping[biggest].length) {
      biggest = key;
    }
  }
  return biggest;
}
console.log(getBiggest(createMapping(email)));

function getBiggestN(mapping, n) {
  let biggest = [];
  for (let i = 0; i < n; i++) {
    let b = getBiggest(mapping, found);
    if (biggest.indexOf(b) == -1) {
      biggest.push(b);
    }
  }
  return found;
}
console.log(getBiggestN(createMapping(email), 3));
