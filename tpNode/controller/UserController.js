const userModel = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports =  {
    addUser: (req, res) => {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new userModel({
                    email: req.body.email,
                    password: hash,
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    adresse: req.body.adresse,
                    username: req.body.username,
                    telephone: req.body.telephone
                });
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(400).json({ error }));
        return res;
    },
    login: (req, res) => {
        userModel.findOne({ username: req.body.username })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ error: 'Utilisateur non trouvé !' });
                }
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Mot de passe incorrect !' });
                        }
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                        });
                    })
                    .catch(error => res.status(500).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
        return res;
    },
    addUserContact: (req, res) => {
        let requestContact = req.body
        userModel.findByIdAndUpdate(req.body.id,
            {
                $push: {
                    contacts: {
                        nom: requestContact.nom,
                        prenom: requestContact.prenom,
                        adresse: requestContact.adresse,
                        email: requestContact.email,
                        telephone: requestContact.telephone
                    }
                }
            },
            { new: true, useFindAndModify: false }
        ).then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(400).json({ message:error.message }));
        return (res)
    },

    getUserList: (req, res) => {
        userModel.find()
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json({message: error.message }));
        return res
    },
    deleteUserContact: (req, res) => {
        //var arrContact = []
        let arrC = userModel.findOne({ _id: req.body.id })
            .then(user => {
                for(let i=0; i< user.contacts.length; i++){
                    if (user.contacts[i].email === req.body.email){
                         user.contacts.splice(i, 1);
                    }
                }
                userModel.findByIdAndUpdate(req.body.id, {
                    contacts: user.contacts
                })
            }).then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(404).json({ error }));
        return res
    },

    getUser: (req, res) => {
        userModel.findOne({ _id: req.body.id })
            .then(user => res.status(200).json(user))
            .catch(error => res.status(404).json({ error }));
        return res
    },

    updateUser: (req, res) => {
        let conditions = {_id:req.body.id}
        userModel.update(conditions, req.body)
            .then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(400).json({ message:error.message }));
        return (res)

    },
    deleteUser: (req, res) => {
        let conditions = {_id:req.body.id}
        userModel.remove(conditions)
            .then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(400).json({ message:error.message }));
        return (res)

    }
};

