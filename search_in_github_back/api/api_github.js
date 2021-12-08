require('dotenv').config()
const axios = require('axios')
const URL_GIT = "https://api.github.com"
const TOKEN = process.env.TOKEN_GITHUB


class ApiGitHub {
    static async getUser(login){
        return await axios.get(URL_GIT+"/users/"+login , {
            headers: {
                "Authorization" : TOKEN
            }
        })
    }

    static async getRepo(login){
        return await axios.get(URL_GIT+"/users/"+login + "/repos" , {
            headers: {
                "Authorization" : TOKEN
            }
        })
    }


    static async getBranch(login , repo){
        let URL = URL_GIT + "/repos/" + login + "/" + repo + "/branches"
        return await axios.get(URL , {
            headers: {
                "Authorization" : TOKEN
            }
        })
    }
}



module.exports = ApiGitHub;