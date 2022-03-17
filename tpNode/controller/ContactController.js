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
        contactModel.findOne({ _id: req.body.id })
            .then(contact => res.status(200).json(contact))
            .catch(error => res.status(404).json({ error }));
        return res
    },

    updateContact: (req, res) => {
        let conditions = {_id:req.body.id}
        contactModel.update(conditions, req.body)
            .then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(400).json({ message:error.message }));
        return (res)

    },
    deleteContact: (req, res) => {
        let conditions = {_id:req.body.id}
        contactModel.remove(conditions)
            .then(() => res.status(201).json({ message: 'success'}))
            .catch(error => res.status(400).json({ message:error.message }));
        return (res)

    }
};

