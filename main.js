const inquirer = require('inquirer');
const fs = require('fs');

let rawdata = fs.readFileSync('db.json');
let data = JSON.parse(rawdata);

let username = "";
let password = "";


console.log("Connexion au service BetterEats");
inquirer.prompt(
  [{
    name: "username",
    type: "input",
    message: "Identifiants"
  }])
  .then(answers => {
    username = answers.username
    inquirer.prompt(
      [{
        name: "password",
        type: "input",
        message: "Mot de passe"
      }])
      .then(answers => {
        password = answers.password
        console.log(username + " login in !!!")
      })

  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });