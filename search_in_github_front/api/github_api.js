const API_URL = "http://localhost:8080" 

export async function getUser(login){
    const resp = await fetch(API_URL + "/api/user/" + login)
    return await resp.json()
}


export async function getRepo(id_usr){
    const resp = await fetch(API_URL + "/api/repo/" + id_usr)
    return await resp.json()
}



export async function getBranch(repo_id){
    const resp = await fetch(API_URL + "/api/branch/" + repo_id)
    return await resp.json()
}


export async function getReadMe(login,repo_name,repo_branch){
    const URL_README = "https://raw.githubusercontent.com/" + login + "/" + repo_name + "/" + repo_branch + "/README.md"
    const resp = await fetch(URL_README)

    return await resp.text()
}