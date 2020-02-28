const questions = [

	{
		type: 'input',
		name: 'Username',
		message: 'What is your GitHub username?',
	},
	{
		type: 'list',
		name: 'Color',
		message: 'What is your favorite color?',
		choices: ["blue", "red", "brown", "yellow"]
	},
	// {
	// 	type: 'input',
	// 	name: 'ProjectTitle',
	// 	message: 'Name of your project?',
	// },
	// {
	// 	type: 'input',
	// 	name: 'ProjectDescription',
	// 	message: 'Type a description of your project:',
	// },
	// {
	// 	type: 'input',
	// 	name: 'Installation',
	// 	message: 'Steps to install your project:',
	// },
	// {
	// 	type: 'input',
	// 	name: 'usage',
	// 	message: 'Project instructions and how to use it:',
	// },
	// {
	// 	type: 'list',
	// 	name: 'license',
	// 	message: 'Your chosen license:',
	// },

	// {
	// 	type: 'input',
	// 	name: 'ProjectTest',
	// 	message: 'How to use your project',
	// },
	// {
	// 	type: 'input',
	// 	name: 'Questions',
	// 	message: 'Ask me questions',
	// },
];

module.exports = questions;

