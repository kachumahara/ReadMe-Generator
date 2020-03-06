require('dotenv').config();
const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const questions = require('./utils/questions.js');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
const path = require('path');
const { inherits } = require('util');


// api.getUser("kachumahara")
function writeToFile(data) {
    fs.writeFile("generatedREADME.md", generateMarkdown(data), function(error){
        if (error) throw error;
        console.log("Success!")
    })
}

function init() {
    inquirer.prompt(questions).then(function(res) {
        console.log(res)
        // api.getUser(res.username).then
        writeToFile(res);
        //var profile = res.data.avatar_url;
        //var email = res.data.email || "kachumahara@gmailc.com";
        //var name = res.data.name;
        // console.log(profile);
        // console.log(email);
    });
}

init();

// async function init() {
// 	try {
// 		const userInput = await inquirer.prompt(questions);
// 		const { data: gitInfo } = await api.getUser(userInput.username);
// 		const generateMarkdown = generateMardown(userInput, gitInfo);
// 		await writeFileSync('newReadMe.md'.readme);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// init();
