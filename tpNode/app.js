const contactModel = require('./model/Contact')
const express = require('express') //export du module express en vue de creer un serveur

const app = express() //creation d'une instance express

const contactController = require('./controller/ContactController')
const router = express.Router()

router.get('/contacts', function (req, res){

    contactController.getContactList(req.body, res)
})
router.get('/contact/:mail', function (req, res){
    contactController.getContact(req.body, res)

})
router.post('/contact', function (req, res){
    console.log(req.body)
    //onsole.log(req.params, req)
    contactController.addContact(req, res)
})

router.post("/add_user", async (request, response) => {

   const user = new contactModel(request.body);
    console.log(user)
    try {
        await user.save();

        response.send(user);
    } catch (error) {
        console.log(error.message)
        response.status(500).send(error);
    }
});


app.use("/api", router)

app.listen(8800, ()=>{
    console.log("working 😊😊😊")
})