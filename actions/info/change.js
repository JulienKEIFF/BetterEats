const inquirer = require("inquirer");
const editJsonFile = require("edit-json-file");
const path = require('path');
const fs = require('fs');

const rawdata = fs.readFileSync(path.resolve('./db.json'))
const data = JSON.parse(rawdata)
let file = editJsonFile(path.resolve('./db.json'))

let customers = data.customer

function changeAdresseLivraison(){
    inquirer.prompt([
        {
            message:"Choisissez un utilisateur a modifier",
            name: "custom",
            type: "list",
            choices:customers
        },
        {
            name: "deliverAdress",
            type: "input",
            message:"Adresse de livraison"
        }
    ]).then(res => {
        customers.forEach((cust, key) => {
            if (cust.name === res.custom){

                const path = "customer."+ key +".adress"

                const adress = file.get(path)

                adress.push(res.deliverAdress)

                file.set(path, adress)
                file.save()
            }
        })

    })
}

module.exports = {changeAdresseLivraison};
