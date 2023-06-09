/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
for(i=0; i<pets.length; i++){
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.splice(0, 1).join())
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licencePlate = "FALL1N1"
cars[1].licencePlate = "2JRI424"
cars[2].licencePlate = "OUTATIME"

console.log('Le macchine hanno le targhe ora', cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const Bugatti = {
  brand: 'Bugatti',
  model: 'Veyron',
  color: 'black',
  trims: ['16.4', 'pur', 'sang'],
}

const cars3 = {...cars[0], ...Bugatti}
cars.push(cars3)
console.log('Ho aggiunto una quarta macchina', cars)

/* Ho lasciato questa parte commentata perché il delete non permetteva l'esecuzione
del codice scritto nell'esercizio 7

for(let i=0; i<cars.length; i++){
  delete cars[i].trims
}

console.log(cars)*/

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []

for(let i=0; i<cars.length; i++){
  justTrims.push(cars[i].trims[0])
}

console.log('Queste sono solo le trims', justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i=0; i<cars.length; i++){
  if(cars[i].color.charAt(0) === "b"){
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let counter = 0
while(counter < numericArray.length-4){
  console.log(numericArray[counter])
  counter++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

let italianAlphabet = "abcdefghilmnopqrstuvz".split('');
console.log(italianAlphabet)

let indices = []

for(let j=0; j<charactersArray.length; j++){
  for(let i=0; i<italianAlphabet.length; i++){
    switch (true) {
      case charactersArray[j] === italianAlphabet[i]:
      indices.push(i+1)
  }
}
}

console.log(indices)