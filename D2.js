/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 3;
const num2 = 7;
const num3 = num1 > num2 ? "Il numero più grande è " + num1 + " (variabile num1)" : "Il numero più grande è " + num2 + " (variabile num2)";
console.log(num3);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num4 = 7;

if (num4 !== 5) {
  console.log("Il valore di num4 è uguale a 5?", "not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number = 25;
const isMultipleOfFive = number % 5;

if (isMultipleOfFive === 0) {
  console.log("Il numero è divisibile per 5?", "divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const firstNum = 24;
const secondNum = 16;

if (firstNum === 8 || secondNum === 8) {
  console.log("Il valore di uno dei 2 numeri è uguale a 8");
} else if (firstNum + secondNum === 8 || firstNum - secondNum === 8 || secondNum - firstNum === 8) {
  console.log("La somma/sottrazione dei due valori è uguale a 8");
} else {
  console.log("Nessuna operazione da come risultato 8.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 35;
let shippingCost = 10;

// if (totalShoppingCart > 50) {
//   console.log("Es. 5 - Il totale da pagare con spedizione gratuita ammonta a", totalShoppingCart + " €");
// } else {
//   totalShoppingCart = totalShoppingCart + shippingCost;
//   console.log("Es. 5 - Il totale da pagare con costi di spedizione ammonta a", totalShoppingCart + " €");
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart -= (totalShoppingCart * 20) / 100;

if (totalShoppingCart > 50) {
  console.log("Es. 6 - Il totale scontato da pagare con spedizione gratuita ammonta a", totalShoppingCart + " €");
} else {
  totalShoppingCart = totalShoppingCart + shippingCost;
  console.log("Es. 6 - Il totale scontato da pagare con costi di spedizione ammonta a", totalShoppingCart + " €");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 1;
const y = 3;
const z = 5;

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const typeOfVar = "Ciao!";

if (typeof typeOfVar === "string") {
  console.log("Il valore di typeOfVar è di tipo stringa = " + typeOfVar);
} else {
  console.log("Il valore di typeOfVar è numerico = " + typeOfVar);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const isEven = 49;

if (isEven % 2 === 0) {
  console.log("Il numero " + isEven + " è pari!");
} else {
  console.log("Il numero " + isEven + " è dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
