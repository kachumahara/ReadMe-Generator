const axios = require("axios");

const api = {
    getUser(username) {
        const queryURL = `https://api.github.com/users/${username}`
        return axios.get(queryURL);
    }
};
module.exports = api;
