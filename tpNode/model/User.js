const config = require('../config/config');
const mongoose = config().mongoose
const unquevalidator = require('mongoose-unique-validator')

const UserModel = mongoose.Schema({ //créer un schéma de données pour votre base de données MongoDB.
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    adresse: { type: String, required: false },
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telephone: { type: String, required: true },
    contacts: []
});

UserModel.plugin(unquevalidator)

module.exports = mongoose.model('UserModel', UserModel); //transformer le schema en un modèle utilisable.