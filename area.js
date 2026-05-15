import { calcolaAreaQuadrato, calcolaAreaRettangolo } from './figure.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function main() {
  let scelta;

  do {
    const risposta = await rl.question("Inserisci il tipo di figura, seleziona 1 per il quadrato, 2 per il rettangolo e 3 per il cerchio ");
    scelta = parseInt(risposta.trim(), 10);
  } while ((scelta !== 1) && (scelta !== 2) && (scelta !== 3));

  if (scelta === 1) {
    const rispostaLato = await rl.question("Inserisci il lato: ");
    const lato = parseFloat(rispostaLato.trim());

    console.log("L'area è: " + calcolaAreaQuadrato(lato));
  }
  else if (scelta === 2) {
    const rispostaBase = await rl.question("Inserisci la base: ");
    const base = parseFloat(rispostaBase.trim());

    const rispostaAltezza = await rl.question("Inserisci l'altezza: ");
    const altezza = parseFloat(rispostaAltezza.trim());

    console.log("L'area è: " + calcolaAreaRettangolo(base, altezza));
  }
  else if (scelta === 3) {
    const rispostaRaggio = await rl.question("Inserisci il raggio: ");
    const raggio = parseFloat(rispostaRaggio.trim());

    console.log("L'area è: " + calcolaAreaCerchio(raggio));
  }

  rl.close();
}

main();
