const config = require('../config/config');
const mongoose = config().mongoose

const ContactModel = mongoose.Schema({ //créer un schéma de données pour votre base de données MongoDB.
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    adresse: { type: String, required: false },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
});

module.exports = mongoose.model('ContactModel', ContactModel); //transformer le schema en un modèle utilisable.