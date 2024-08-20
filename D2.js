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
  console.log("Il numero è un multiplo di 5?", "divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const firstNum = 24;
const secondNum = 16;

// if (firstNum === 8 || secondNum === 8) {
//   console.log("Il valore di uno dei 2 numeri è uguale a 8");
// } else if (firstNum + secondNum === 8 || firstNum - secondNum === 8 || secondNum - firstNum === 8) {
//   console.log("La somma/sottrazione dei due valori è uguale a 8");
// } else {
//   console.log("Nessuna operazione da come risultato 8.");
// }

// algoritmo alternativo e più specifico
if (firstNum === 8) {
  console.log("Il valore del primo valore uguale a 8");
} else if (secondNum === 8) {
  console.log("Il valore del secondo valore uguale a 8");
} else if (firstNum + secondNum === 8) {
  console.log("La somma dei due valori è uguale a 8");
} else if (firstNum - secondNum === 8) {
  console.log("La sottrazione tra il primo e il secondo valore è 8");
} else if (secondNum - firstNum === 8) {
  console.log("La sottrazione tra il secondo e il primo valore è 8");
} else {
  console.log("Nessuna operazione tra i 2 valori ha come risultato 8.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 51;
const shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("Es. 5 - Il totale da pagare con spedizione gratuita ammonta a", totalShoppingCart + " €");
} else {
  const totalAndShipping = totalShoppingCart + shippingCost;
  console.log("Es. 5 - Il totale da pagare con costi di spedizione ammonta a", totalAndShipping + " €");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// opzione 1 - prevede che definisco 2 variabili diverse per il totale + spedizione per entrambi gli esercizi

totalShoppingCart -= (totalShoppingCart * 20) / 100;

if (totalShoppingCart > 50) {
  console.log("Es. 6 - Il totale scontato da pagare con spedizione gratuita ammonta a", totalShoppingCart + " €");
} else {
  totalBFAndShipping = totalShoppingCart + shippingCost;
  console.log("Es. 6 - Il totale scontato da pagare con costi di spedizione ammonta a", totalBFAndShipping + " €");
}

// opzione 2 - vengono sfruttate le stesse variabili senza la creazione di nuove variabili, impostando la condizione per la promo BF

// const isBF = true;

// if (isBF === true) {
//   totalShoppingCart -= (totalShoppingCart * 20) / 100;
//   if (totalShoppingCart > 50) {
//     console.log("Es. 6 - Il totale scontato da pagare con spedizione gratuita ammonta a", totalShoppingCart + " €");
//   } else {
//     totalShoppingCart += shippingCost;
//     console.log("Es. 6 - Il totale scontato da pagare con costi di spedizione ammonta a", totalShoppingCart + " €");
//   }
// } else if (totalShoppingCart > 50) {
//   console.log("Es. 5 - Il totale da pagare con spedizione gratuita ammonta a", totalShoppingCart + " €");
// } else {
//   totalShoppingCart += shippingCost;
//   console.log("Es. 5 - Il totale da pagare con costi di spedizione ammonta a", totalShoppingCart + " €");
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numX = 3;
const numY = 5;
const numZ = 10;

if (numX >= numY && numX >= numZ && numY >= numZ) {
  console.log("L'ordine decrescente delle variabili è", numX + " " + numY + " " + numZ);
} else if (numY >= numX && numY >= numZ && numX >= numZ) {
  console.log("L'ordine decrescente delle variabili è", numY + " " + numX + " " + numZ);
} else if (numZ >= numX && numZ >= numY && numX >= numY) {
  console.log("L'ordine decrescente delle variabili è", numZ + " " + numX + " " + numY);
} else if (numZ >= numX && numZ >= numY && numY >= numX) {
  console.log("L'ordine decrescente delle variabili è", numZ + " " + numY + " " + numX);
}

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

// opzione più corretta e completa
// const userValue = prompt("Inserisci un valore:");
// const parsedValue = parseInt(userValue);
// if (typeof parsedValue === "number" && !isNaN(userValue)) {
//   console.log("Il valore è di tipo numerico ed è: " + userValue);
// } else {
//   console.log("Il valore è di tipo stringa ed è " + userValue);
// }

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

let val = 3;
if (val < 10 && val >= 5) {
  // AGGIUNTA CONDIZIONE CON OPERATORE &&
  console.log("Es. 10 - Meno di 10");
} else if (val < 5) {
  console.log("Es. 10 - Meno di 5");
} else {
  console.log("Es. 10 - Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log("Aggiungo prop. 'city'", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log("Tolgo prop. 'lastName'", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("L'elemento rimosso dall'oggetto è", me.skills.pop());
console.log("L'oggetto aggiornato è ora il seguente", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let newArray = [];

newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// corretto sarebbe stato:
// newArray.push(1);
// newArray.push(2);
// newArray.push(3);
// newArray.push(4);
// newArray.push(5);
// newArray.push(6);
// newArray.push(7);
// newArray.push(8);
// newArray.push(9);
// newArray.push(10);

console.log("Aggiungo dei valori all'array creato", newArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

newArray.splice(-1, 1, 100);
console.log("Sostituisco il 10 (ultimo valore) con il 100", newArray);
