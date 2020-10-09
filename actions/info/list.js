const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); 

const main = require('../../main');

let rawdata = fs.readFileSync(path.resolve('./db.json'));
let data = JSON.parse(rawdata);

let orderList = []

function listing(){
  for (let i = 0; i < data.customer[0].orderList.length; i++) {
    const element = data.customer[0].orderList[i];
    orderList.push(element);
  }

  inquirer.prompt([{
    name: "orderList",
    type: "list",
    message: "Voir les détails des commandes",
    choices: orderList
  }])
  .then(answer => {
    
  })
}



module.exports = { listing }