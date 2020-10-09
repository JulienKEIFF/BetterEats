const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); 

let rawdata = fs.readFileSync(path.resolve('./db.json'));
let data = JSON.parse(rawdata);


function search(){
  console.log(data)
}


module.exports = {search};