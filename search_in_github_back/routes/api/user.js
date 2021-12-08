var express = require('express');
var router = express.Router();
var {PrismaClient} = require('@prisma/client')

const api_github = require('../../api/api_github')
const prisma = new PrismaClient()


//Return a user and create one if not exist
router.get('/:login', function(req, res, next) {
    const { login }  = req.params

    //Externaliser pour faire une resync si l'utilisateur le veux !
    prisma.user.findUnique({
        where: {
            login: login.charAt(0).toUpperCase() + login.slice(1)
        }
    }).then( async (result) => {
        if(result === null){
            let user = await api_github.getUser(login)
            let repos_user = await api_github.getRepo(login)

            let new_user = await prisma.user.create({
                data: {
                    id: user.data.id,
                    avatar_url: user.data.avatar_url,
                    login: user.data.login,
                    nbFollower: user.data.followers,
                    nbFollowing: user.data.following,
                    Repo: undefined,
                    createAt: user.data.created_at
                }
            })

            for(let i = 0 ; i < repos_user.data.length ; i++){
                let repo = await prisma.repo.create({
                    data: {
                        id: repos_user.data[i].id,
                        name: repos_user.data[i].name,
                        Branch: undefined,
                        createDate: repos_user.data[i].created_at,
                        ownerid: new_user.id
                    }
                })
                let branch = await api_github.getBranch(login,repos_user.data[i].name)
                for(let j = 0 ; j  < branch.data.length ; j++){
                    await prisma.branch.create({
                        data: {
                            name: branch.data[j].name,
                            repoId : repo.id,
                        }
                    })
                }
            }
            res.sendStatus(200)
        }else{
            res.status(200).json(result)
        }
    }).catch((err) => {
        res.status(400).json(err)
    })
});






module.exports = router;
