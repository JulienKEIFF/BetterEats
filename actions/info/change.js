const inquirer = require("inquirer");
const editJsonFile = require("edit-json-file");
const path = require('path');

let file = editJsonFile(path.resolve('./db.json'))

"ajouter adresse de livraison"

changeAdresseLivraison()

function changeAdresseLivraison(){
    inquirer.prompt([
        {
            name: "deliverAdress",
            type: "input",
            message:"Adresse de livraison"
        }
    ]).then(res => {
        file.set("deliverAdress", res.deliverAdress)
        file.save()
    })
}

module.exports = {changeAdresseLivraison};
