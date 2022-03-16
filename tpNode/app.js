
const express = require('express') //export du module express en vue de creer un serveur
const {success, error} = require("./config/reqStatus")

const app = express() //creation d'une instance express
//const mongoose = require("config/config")

let router = express.Router()

router.get('/contacts', function (req, res){
    res.json(error("wrong max value"))
   /* if (req.query.max !== undefined && req.query.max > 0){
        res.json(success("with max"))
    } else if (req.query.max !==undefined){
        res.json(error("wrong max value"))
    }else{
        res.json(success('members'))
    }*/
})

app.use("/api", router)

app.listen(8800, ()=>{
    console.log("working 😊😊😊")
})