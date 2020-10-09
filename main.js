var inquirer = require('inquirer');

inquirer.prompt(
  [{
    name: "user_input",
    type: "input",
    message: "Choix de base"
  }])
  .then(answers => {
    console.log(answers.user_input);
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });