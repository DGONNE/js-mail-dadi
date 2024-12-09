/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
*/


/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/
// genero un numero random da 1 a 6 per il player
const playerNumber = Math.floor(Math.random() *6) + 1;
// gnero numero random da 1 a 6 per la cpu
const cpuNumber = Math.floor(Math.random() *6) + 1;
// SE il numero del player > del numero cpu
//   - ha vinto il giocatore
//   -ALTRIMENTI SE il numero della cpu > di quello del giocatore
//   -ha vinto la cpu
//   -ALTRIMENTI i numeri sono uguali
console.log(playerNumber, cpuNumber);
if(playerNumber > cpuNumber) {
    console.log('Ha vinto il giocatore')
} else if(cpuNumber > playerNumber) {
    console.log('Ha vinto la CPU')
} else {
    console.log('Pareggio')
}