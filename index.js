require("dotenv").config();
const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const questions = require('./utils/questions.js');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
const path = require("path")
const writeFileSync = util.promisify(fs.writeFile);


async function  init() {
  try {
    const unserInput = await inquirer.prompt (questions);
    const { data: gitInfo } = await api.getUser(userInput.username);
    const readme = generateMardown(userInput, gitInfo)
    await writeFileSync("newReadMe.md". readme);
  }
  catch (err) {
    console.log(err)
  }
};

   
    
  


