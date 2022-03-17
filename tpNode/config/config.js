

module.exports = () => {
        const mongoose =require('mongoose')
         mongoose.connect('mongodb+srv://contact_user:passer@cluster0.7cenr.mongodb.net/contactsdb?retryWrites=true&w=majority',
            { useNewUrlParser: true,
                    useUnifiedTopology: true })
            .then(() => console.log('Connexion à MongoDB réussie !😊😊😊'))
            .catch(() => console.log('Connexion à MongoDB échouée !😩😩😩'));
        return mongoose
};