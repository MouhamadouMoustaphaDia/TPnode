const contactModel = require('./model/Contact')
const express = require('express') //export du module express en vue de creer un serveur
const cors = require('cors');
const app = express() //creation d'une instance express

const contactController = require('./controller/ContactController')
const userController = require('./controller/UserController')
let router = express.Router()


const bodyParser = require('body-parser')

app.use(bodyParser.json())//parser en json)
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use((req, res, next) => {
    console.log('request url:', req.url)
    next() //permet de passer à la suite de la requête

})

router.get('/contacts', function (req, res){
    console.log(req)
    contactController.getContactList(req, res)
})
router.get('/contact', function (req, res){
    contactController.getContact(req, res)
})
router.post('/contact', function (req, res){
    contactController.addContact(req, res)
})
router.put('/contact', function (req, res){
    contactController.updateContact(req, res)
})
router.delete('/contact', function (req, res){
    contactController.deleteContact(req, res)
})

router.post('/signup', function (req, res){
    userController.addUser(req, res)
})

router.post('/login', function (req, res){
    userController.login(req, res)
})

router.post('/user/add_contact', function (req, res){
    userController.addUserContact(req, res)
})
router.get('/user', function (req, res){
    userController.getUser(req, res)
})
router.delete('/user/remove_contact', function (req, res){
    userController.deleteUserContact(req, res)
})
/*
router.delete('/user/contact', function (req, res){
    userController.deleteUserContacts(req, res)
})*/




/*router.post("/add_user", async (request, response) => {

   const user = new contactModel(request.body);
    console.log(user)
    try {
        await user.save();

        response.send(user);
    } catch (error) {
        console.log(error.message)
        response.status(500).send(error);
    }
});*/


app.use("/api", router)

app.listen(8800, ()=>{
    console.log("working 😊😊😊")
})