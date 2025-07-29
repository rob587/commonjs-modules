// 3 - people.js
// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const names = require('./modules/names.js')
const hobbies = require('./modules/hobbies.js')

const getInfos = () =>{
    return{
        namesInfo: names("ciccio", "pasticcio"),
        hobbiesInfo: hobbies ("calcio", "tennis", "golf")
    }
}


console.log(getInfos())
