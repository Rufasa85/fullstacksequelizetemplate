const express = require("express");
const db = require('../models');
const router = express.Router();

router.get('/',function(req,res){
    db.Thing.findAll({}).then(function(dbThings){
        res.json(dbThings);
    })
})

router.get('/withuser',function(req,res){
    db.Thing.findAll({include:[db.User]}).then(function(dbThings){
        res.json(dbThings);
    })
})

router.post("/",function(req,res){
    db.Thing.create(req.body).then(function(dbThing){
        res.json(dbThing);
    })
})

module.exports = router;