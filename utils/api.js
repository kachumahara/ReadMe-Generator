const axios = require("axios");
require('dotenv').config();

const api = {
	getUser(username) {
		return axios
			.get(
				`https://api.github.com/users/${username}`
			)
			.catch(error => {
				console.log("no user", err);
				process.exit(1);
			});
	},
};
module.exports = api;
