const newOrder = require('./actions/order/search');
const updateCLient = require('./actions/info/change'); 
const status = require('./actions/state-order/status');

const inquirer = require('inquirer');
const fs = require('fs');

let rawdata = fs.readFileSync('db.json');
let data = JSON.parse(rawdata);

let username = "";
let password = "";

login()



function login() {
  console.log("Connexion au service BetterEats");
  inquirer.prompt(
    [{
      name: "username",
      type: "input",
      message: "Identifiants"
    }])
    .then(answers => {
      username = answers.username;
      inquirer.prompt(
        [{
          name: "password",
          type: "password",
          message: "Mot de passe"
        }])
        .then(answers => {
          password = answers.password;
          console.log(username + " login in !!!");
          choice();
        })
    })
    .catch(error => console.error(error));
}

function choice(){
  inquirer.prompt(
    [{
      name: "choice",
      type: "list",
      message: "Quels service vouler vous ?",
      choices: ["Commander un repas", "Suivre l'évolution d'une commande", "Gerer mes informations personnels"]
    }])
    .then(answers => {
      if (answers.choice === "Commander un repas"){
        newOrder.search();
      } else if (answers.choice === "Suivre l'évolution d'une commande"){
        status.status();
      } else if (answers.choice === "Gerer mes informations personnels"){
        updateCLient.changeAdresseLivraison();
      }else{
        console.log("Choix non pris en charge. Veuillez retenter");
        choice();
      }
    })
}