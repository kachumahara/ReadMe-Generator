const axios = require('axios');
require('dotenv').config();

const api = {
	getUser(username) {
		const queryURL = `https://api.github.com/users/${username}`;
		return axios.get(queryURL);
	},
};
axios.get("queryURL").then(function(res) {
	console.log(username);
});
module.exports = api;
