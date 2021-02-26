/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

//Chiedo numero di chilometri
var km = parseInt(prompt("Quanti chilometri devi percorrere?"));

//Verifico che il valore inserito sia un numero 1
if ( isNaN (km) ) {
    km = parseInt(prompt("ATTENTO! Devi inserire una cifra! Riprova."));
} 
//Verifico che il valore inserito sia un numero 2
if ( isNaN (km) ) {
    alert("Impara a leggere, poi ricarica la pagina.");
}  

document .getElementById('answer__km') .innerHTML = "Devi percorrere " + (km) + " km."

//Chiedo quanti anni ha il passeggero
var age = parseInt(prompt("Quanti anni hai?"));

//Verifico che il valore inserito sia un numero 1
if ( isNaN (age) ) {
    age = parseInt(prompt("ATTENTO! Devi inserire una cifra! Riprova."));
} 
//Verifico che il valore inserito sia un numero 2
if ( isNaN (age) ) {
    alert("Chiedi a qualcuno la tua età, poi ricarica la pagina.");
}  

document .getElementById('answer__age') .innerHTML = "Hai dichiarato di avere " + (age) + " anni."

//Calcolo costo biglietto
var standardTicket = (km) * 0.21;
var ticketChildren = (standardTicket) * 0.8;
var ticketOlder = (standardTicket) * 0.6;


if (age < 18) {
    document .getElementById ('answer__sale') .innerHTML = "Essendo minorenne hai diritto ad uno sconto di " + ((standardTicket) * 0.2) + " euro.";

    document .getElementById ('answer__cost') .innerHTML = (ticketChildren) + " euro.";
} else if (age >= 65) {
    document .getElementById ('answer__sale') .innerHTML = "Avendo più di 65 anni, hai diritto ad uno sconto di " + ((standardTicket) * 0.4) + " euro.";

    document .getElementById ('answer__cost') .innerHTML = (ticketOlder) + " euro.";
} else {
    document .getElementById ('answer__cost') .innerHTML = (standardTicket) + " euro.";
}

