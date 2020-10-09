const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); 
const main = require('./../../main');

let rawdata = fs.readFileSync(path.resolve('./db.json'));
let data = JSON.parse(rawdata);

let restaurantList = [];
let choiceResto = ""; 

let menuList = [];
let choiceMenu = "";

let adressList = [];
let adressChoose = "";

let payList = [];
let payChoose = "";


//Choix du restaurant
function search(){
  for (let i = 0; i < data.resto.length; i++) {
    const element = data.resto[i];
    restaurantList.push(element);
  }

  inquirer.prompt(
    [{
      name: "searchPrompt",
      type: "list",
      message: "Choisissez votre restaurant :",
      choices: restaurantList
    }])
  .then(answers => {
    choiceResto = answers.searchPrompt;
    menuChoice();
  })
}

//Choix du menu
function menuChoice() {
  for (let i = 0; i < data.resto.length; i++) {
    const el = data.resto[i];
    if (el.name === choiceResto) {
      for (let i = 0; i < el.menu.length; i++) {
        const menu = el.menu[i];
        menuList.push(menu.item);
      }
    }
  }
  inquirer.prompt([{
    name: "menuChoice",
    type: "list",
    message: "Quel plat voulez-vous ?",
    choices: menuList
  }])
  .then(answers => {
    choiceMenu = answers.menuChoice;
    adressChooser();
  })
}

//Choix de l'adresse de livraison
function adressChooser(){
  for (let i = 0; i < data.customer[0].adress.length; i++) {
    const el = data.customer[0].adress[i];
    adressList.push(el)
  }
  inquirer.prompt([{
    name: "adressChoose",
    type: "list",
    message: "Choisissez votre adresse de livraison",
    choices: adressList
  }])
  .then(answer => {
    adressChoose = answer.adressChoose;
    payChooser();
  })
}

function payChooser(){
  for (let i = 0; i < data.customer[0].pay.length; i++) {
    const element = data.customer[0].pay[i];
    payList.push(element);
  }
  inquirer.prompt([{
    name: "pay",
    type: "list",
    message: "Choisissez votre mode de paiement",
    choices: payList
  }])
  .then(answer => {
    payChoose = answer.pay;
    console.log("Vous avez commandé " + choiceMenu + " avec le moyen de paiement " + payChoose);
    console.log("Retour au menu");
  })
}

module.exports = {search}