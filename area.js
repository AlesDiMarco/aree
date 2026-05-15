import { calcolaAreaQuadrato, calcolaAreaRettangolo } from './figure.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function main() {
  let scelta;

  do {
    const risposta = await rl.question("Inserisci il tipo di figura, seleziona 1 per il quadrato e 2 per il rettangolo: ");
    scelta = parseInt(risposta.trim(), 10);
  } while ((scelta !== 1) && (scelta !== 2));

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

  rl.close();
}

main();
