const fetch = require('node-fetch');
const baseUrl = "http://localhost:5000/api/user";


const getUsers = async function(req,res){
    const resUsers = await fetch(baseUrl);
    const dataUsers = await resUsers.json()
    return dataUsers;
}

module.exports = getUsers;