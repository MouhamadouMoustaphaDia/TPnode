const contactModel = require('../model/Contact')


module.exports =  {
     addContact: (req, res) => {
        console.log(req.body)

        const contact = new contactModel({
            ...req.body
        })
        contact.save()
            .then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(400).json({ message:error.message }));
         return (res)
    },

     getContactList: (req, res) => {
        contactModel.find()
            .then(contacts => res.status(200).json(contacts))
            .catch(error => res.status(400).json({message: error.message }));
        return res
    },

     getContact: (req, res) => {
        contactModel.findOne({ email: req.params.email })
            .then(contact => res.status(200).json(contact))
            .catch(error => res.status(404).json({ error }));
        return res
    }
};

