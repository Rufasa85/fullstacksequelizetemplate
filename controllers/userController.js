const express = require("express");
const db = require('../models');
const router = express.Router();

router.get('/',function(req,res){
    db.User.findAll({}).then(function(dbUsers){
        res.json(dbUsers);
    })
})

router.get('/withthings',function(req,res){
    db.User.findAll({include:[db.Thing]}).then(function(dbUsers){
        res.json(dbUsers);
    })
})

router.post('/',function(req,res){
    db.User.create(req.body).then(function(dbUser){
        res.json(dbUser);
    })
})

module.exports = router;