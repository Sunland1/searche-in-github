var express = require('express');
var router = express.Router();
var {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/:repo_id' , (req,res) => {
    const {repo_id} = req.params
    prisma.branch.findMany({
        where: {
           repoId: parseInt(repo_id)
        }
    }).then((result) => {
        res.status(200).json(result)
    }).catch( (err) => {
        res.status(400).json(err) 
    })
})


module.exports = router;