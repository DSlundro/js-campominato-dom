// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro

// assegno le costanti agli elementi
const selectedLevel = document.getElementById(`level`);
const button = document.getElementById(`play`);
const box = document.querySelector(`.box`);

// assegno un array con i livelli
let typeOfLevel = [100, 81, 49]

// aggiunto l'evento al bottone
button.addEventListener(`click`,startGame)

// al click del tasto play verrà generata la griglia di caselle in base alla difficoltà scelta
function startGame() {
    // pulisco l'area dei box all'inizio della funzione
    box.innerHTML = '';

    // scelgo il livello
    const selLevel = parseInt(level.value);
//console.log(`level`, selLevel);
    //stabilisco il numero di celle in base al livello
    const cellCount = typeOfLevel[selLevel];
//console.log(`cells`, cellCount);
    // calcolo le celle calcolando le radici dei numeri nel array
    const boxCell = Math.sqrt(cellCount);
//console.log(cellCount);

    // creo un ciclo per le varie difficoltà 
    for ( let i = 1; i <= cellCount; i++){
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
    }
}









