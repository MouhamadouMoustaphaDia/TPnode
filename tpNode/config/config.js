require('babel-register') //pour lire ES6


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://contact_user:contact_pwd@cluster0.7cenr.mongodb.net/contacts?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("contacts").collection("contacts");
// perform actions on the collection object
    client.close();
});
