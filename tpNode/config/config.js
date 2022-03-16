

const { MongoClient, ServerApiVersion } = require('mongodb');
/*const uri = "mongodb+srv://contact_user:contact_pwd@cluster0.7cenr.mongodb.net/contacts?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("contacts").collection("contacts");
// perform actions on the collection object
    client.close();
});*/

/*mongoose.connect('mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));*/

module.exports = () => {
        const mongoose =require('mongoose')
         mongoose.connect('mongodb+srv://contact_user:passer@cluster0.7cenr.mongodb.net/contactsdb?retryWrites=true&w=majority',
            { useNewUrlParser: true,
                    useUnifiedTopology: true })
            .then(() => console.log('Connexion à MongoDB réussie !'))
            .catch(() => console.log('Connexion à MongoDB échouée !'));
        return mongoose
};