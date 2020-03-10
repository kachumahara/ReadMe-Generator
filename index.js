require('dotenv').config();
const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const util = require("util");
const questions = require('./utils/questions.js');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
const path = require('path');
const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const {data: gitInfo} = await api.getUser(userInput.username);
        const readme = generateMarkdown(userInput, gitInfo)
        await writeFileAsync("newReadme.md", readme);
    } catch (err) {
    console.log(err);
    }
};
init();