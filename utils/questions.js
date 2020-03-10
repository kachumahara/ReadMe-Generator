const questions = [

	{
		type: "input",
		name: "username",
		message: "What is your GitHub username?",
	},
	{
		type: "input",
		name: "title",
		message: 'Name of your project title?',
	},
	{
		type: "input",
		name: 'description',
		message: 'Give a description of your project:',
	},
	{
		type: 'input',
		name: 'Installation',
		message: 'What are the steps to install your project:',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What the user should know about the repo',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Your chosen license:',
		choices: ['MIT', "IBM", "Apache"]
	},

	{
		type: 'input',
		name: 'tests',
		message: 'What command should run?',
	},
	{
		type: 'input',
		name: 'credit',
		message: 'What should the user know about any collaborators to the project?',
	},
];

module.exports = questions;

