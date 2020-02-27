const axios = require('axios')
require("dotenv").config()

const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}/client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    .catch(error =>{
      console.log("cant find user")
      process.exit(1)
    })
  },

getStars(username){
  return axios.get(`https://api.github.com/users/${username}/repos?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&per_page=100`)
  .then(response =>{
  console.log(response)
return response.data.reduce((accumulator, currentValue)=>{
  accumulator += currentValue.stargazers_count;
  return accumulator;
},0)
  })
}
};
api.getStars("kachumahara")
module.exports = api;
