// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro

// *Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe :bomba:.
// *I numeri nella lista delle bombe non possono essere duplicati.
// *In seguito l'utente clicca su una cella:
// *se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
// *la cella si colora di rosso e la partita termina,
// *altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// *La partita termina quando:
// *il giocatore clicca su una bomba
// *o raggiunge il numero massimo possibile di numeri consentiti.
// *Al termine della partita il software deve comunicare il punteggio, 
// *cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// assegno le costanti agli elementi
const selectedLevel = document.getElementById(`level`);
const button = document.getElementById(`play`);
const box = document.querySelector(`.box`);

// assegno un array con i livelli
let typeOfLevel = [100, 81, 49];
// creo una variabile per assegnare i punti
let points = 0;

// aggiunto l'evento al bottone
button.addEventListener(`click`,startGame);

// al click del tasto play verrà generata la griglia di caselle in base alla difficoltà scelta
function startGame() {
    // pulisco l'area dei box all'inizio della funzione
    box.innerHTML = '';

    // scelgo il livello
    const selLevel = parseInt(level.value);
//console.log(`level`, selLevel);
    //stabilisco il numero di celle in base al livello
    const cell = typeOfLevel[selLevel];
//console.log(`cells`, cell);
    // calcolo le celle calcolando le radici dei numeri nel array
    const boxCell = Math.sqrt(cell);
//console.log(cell);

    // genero 16 numeri random
    // creo un array per contenere i numeri ottenuti
    let bomb = [];
    while (bomb.length < 16) {
        let bombNum = Math.floor(Math.random() * cell) + 1;
        if (bomb.includes(bombNum) == false) {
            bomb.push(bombNum);
        }
    }
//console.log(bomb);

    // creo un ciclo per le varie difficoltà 
    for ( let i = 1; i <= cell; i++){
        // creo una costante dei elementi creati
        const cellElement = document.createElement(`div`);
        // aggiungo una classe all'elemento creato precedentemente
        cellElement.classList.add(`cell`);
        // stampo in html i numeri ciclati
        cellElement.innerHTML = i;
        // calcolo l'altezza e la larghezza della griglia
        cellElement.style.width = `calc(100% / ${boxCell})`;
        cellElement.style.height = `calc(100% / ${boxCell})`;
        // creo un evento per cambiate il colore dello sfondo al click del pulsante
        cellElement.addEventListener(`click`, () => {
        // cambio colore al click
        cellElement.classList.toggle(`bg_box`);
        });
        // appendo gli elementi creati nel contenitore delle celle
        box.append(cellElement);
//console.log(i);


// creo un evento dove nella funzione mi registra la presenza della bomba nella cella selezionata
cellElement.addEventListener(`click`, () => {
    // creo una condizione per le bombe
    if (bomb.includes(i)){
        cellElement.classList.add('bg_red');
        // inserisco l'immagine della bomba
        cellElement.innerHTML = `<img src="./assets/img/bomb.png" alt="" class="bomb"> `
        alert(`Hai perso! Il tuo punteggio: ${points}`)  
        setTimeout("location.reload(true);", 3000);
        
    } 
    // se non c'è la bomba, colora di azzurro e incrementa il punteggio
    else{
        cellElement.classList.add(`bg_box`)
        points++
    }
//console.log(points)
        
    // quando il punteggio raggiunte il numero di celle cliccate togliendo quelle dove è presente la bomba
    if (points == cell - 16){
        alert(`Hai vinto! Il tuo punteggio è ${points}`)
        // resetto la pagina
        setTimeout("location.reload(true);", 3000);
    }   
    });    
// box.append(cellElement);
    }
}










