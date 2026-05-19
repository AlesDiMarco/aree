// area.js
// Programma principale per il calcolo dell aree

let figura = require("./figure.js");

// Leggi gli argomenti dalla riga di comando
let args = process.argv.slice(2);

// Controlla che ci siano esattamente 3 argomenti
if ((args.length > 3) || (args.length < 2)) {
  console.log("Uso: node area.js <forma> <misura1> <misura2> (se necessario)");
  console.log("Esempio: node area.js rettangolo 34 2");
  process.exit(1);
}

let forma = args[0];
let risultato;

if (((forma === "quadrato") || (forma === "cerchio")) && (args.length === 2)) {
  if (forma === "quadrato") {
    let lato = args[1];
    console.log("L'area del quadrato è " + figura.calcolaAreaQuadrato(lato));
  }

  else {
    let raggio = args[1];
    console.log("L'area del cerchio è " + figura.calcolaAreaCerchio(raggio));
  }
}

else if ((forma === "rettangolo") && (args.length === 3)) {
  let base = args[1];
  let altezza = args[2];
  console.log("L'area del rettangolo è " + figura.calcolaAreaRettangolo(base, altezza));
}

else {
  console.log("Forma '" + forma + "' non riconosciuta.");
  process.exit(1);
}
