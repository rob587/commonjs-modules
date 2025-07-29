// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// Esporta la funzione dal file.

const names = (firstName, lastName) =>{
    return{
        firstName,
        lastName
    }
}

names("ciccio", "pasticcio")

module.exports = names("ciccio", "pasticcio")

