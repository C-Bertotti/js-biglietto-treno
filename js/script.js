/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

//Chiedo numero di chilometri
var km = parseInt(prompt("Quanti chilometri devi percorrere?"));

//Verifico che il valore inserito sia un numero
if ( isNaN (km) ) {
    km = parseInt(prompt("ATTENTO! Devi inserire una cifra! Riprova."));
}
//Chiedo quanti anni ha il passeggero
var age = parseInt(prompt("Quanti anni hai?"));

//Calcolo costo biglietto
if (age < 18) {
    document .getElementById ('answer') .innerHTML = "Il costo del tuo biglietto è di " + ((km * 0.21) * 0.2) + " euro.";
} else if (age >= 65) {
    document .getElementById ('answer') .innerHTML = "Il costo del tuo biglietto è di " + ((km * 0.21) * 0.4) + " euro.";
} else {
    document .getElementById ('answer') .innerHTML = "Il costo del tuo biglietto è di " + (km * 0.21) + " euro.";
}

