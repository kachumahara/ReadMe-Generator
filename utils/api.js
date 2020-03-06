require("dotenv").config();
const axios = require("axios");

function getUser(username) {
        
            axios.get(
                `https://api.github.com/users/${username}`
            )
            .then( answers => {

                console.log(answers)

            })
    }
getUser("kachumahara")

module.exports = {
    getUser: getUser
}