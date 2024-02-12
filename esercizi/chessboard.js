// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve ritornare una matrice quadrata lunga l
// contenente '#' e ' ', opportunamente alternati, che rappresentino
// una scacchiera di lato l

// la prima casella deve essere un '#'

function chessboard(l) {
  let riga = "";

  for (let j = 0; j < l; j++) {
    if (j % 2 == 0) {
      for (let i = 0; i < l; i++) {
        if (i % 2 == 0) {
          riga = riga + "⬜️ ";
        } else {
          riga = riga + "🟦 ";
        }
      }
      console.log(riga);
      riga = "";
    } else {
      for (let i = 0; i < l; i++) {
        if (i % 2 == 0) {
          riga = riga + "🟦 ";
        } else {
          riga = riga + "⬜️ ";
        }
      }
      console.log(riga);
      riga = "";
    }
  }
}
chessboard(4);
