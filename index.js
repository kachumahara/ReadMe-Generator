const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const questions = require('./utils/questions.js');
const markdown = require(`./utils/generateMarkdown.js`);
const path = require("path")




function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer
    .prompt(questions)
    .then(({Username, color}) => {
      //console.log("DATA USERNAME" , Username)
      api.getUser(Username)
        .then(function(res) {
          console.log(res.data);
     return generateMarkdown({color, ...res.data})
      })
        .catch(function (error){
            console.log(error);
        });
    });
}

init();
