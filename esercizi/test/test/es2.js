// 2) Data una stringa in questo formato "DD-MM-YYYY"
// (ad esempio 07-12-1982 oppure 09-02-2024) e un intero positivo,
//  considerando la stringa come una data e l'intero come un numero di
// giorni, incrementare la data del rispettivo numero di giorni.
// Ad esempio per "07-12-1982" e 5 si deve ottenere "12-12-1982"
// Ad esempio per "30-12-2024" e 2 si deve ottenere "01-01-2025"
// Non considerare gli anni bisestili.
// Non si puo' usare l'oggetto Date.

// function findDate(date, n) {
//   let dateArray = date.split("-");
//   let gg = parseInt(dateArray(0), 10);
//   let mm = dateArray(1);
//   let yy = dateArray(2);
// }
function changeMonth(date, n) {
  let dateArray = date.split("-");
  let ggS = dateArray(0);
  let gg = parseInt(ggS);
  let mm = dateArray(1);
  let yy = dateArray(2);
  let stringGgMm = "";
  let mapMonth = {
    "01": 31,
    "02": 28,
    "03": 31,
    "04": 30,
    "05": 31,
    "06": 30,
    "07": 31,
    "08": 31,
    "09": 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let monthKeys = Object.keys(mapMonth);
  if (n + gg <= mapMonth[mm]) {
    let ggAdd = gg + n;
    let ggAddS = transformToString(ggAdd);
    stringGgMm = ggAddS + "-" + mm + "-" + yy;
  } else {
    if (mm < 12) {
      let ggProxMonth = gg + n - mapMonth[mm];
      let indexMonth = monthKeys.indexOf(mm);
      let proxMonth = monthKeys[indexMonth + 1];
      stringGgMm = ggProxMonth + "-" + proxMonth + "-" + yy;
    } else {
      if (n + gg > mapMonth[mm]) {
        let year = parseInt(yy, 10);
        year++;
        let proxMonth = monthKeys[0];
        let ggProxMonth = gg + n - mapMonth[mm];
        stringGgMm = ggProxMonth + "-" + proxMonth + "-" + year;
      }
    }

    // stringGgMm =
    //   transformToString(ggProxMonth) + "-" + monthKeys[indexMonth] + "-" + yy;
  }
  return stringGgMm;
}
console.log(changeMonth("30-12-2024", 7));
function transformToString(n) {
  let stringN = toString(n);

  if (n < 10) {
    stringN = "0" + n;
  } else {
    stringN = "" + n;
  }
  return stringN;
}
//console.log(transformToString(2));
