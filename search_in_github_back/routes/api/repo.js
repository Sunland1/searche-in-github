var express = require('express');
var router = express.Router();
var {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/:owner_id' , (req,res) => {
    const {owner_id} = req.params
    prisma.repo.findMany({
        where: {
            ownerid: parseInt(owner_id)
        }
    }).then((result) => {
        res.status(200).json(result)
    }).catch( (err) => {
        res.status(400).json(err) 
    })
})


module.exports = router;