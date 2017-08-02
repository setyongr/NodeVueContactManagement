const resource = require('../lib/resource-router');
const db = require('../database');
const contact = db.get('contacts');
const auth = require('../auth');

module.exports = resource({
    id: "id",
    middleware: auth,
    list (req, res, next) {
        var filter = req.query.filter ? JSON.parse(req.query.filter) : {};
        contact.find(filter)
        .then((docs) => res.send(docs))
        .catch((err) => next(err));
    },
    get (req, res, next) {
        contact.findOne({_id:req.params.id})
        .then((doc) => {
            if(!doc) return res.status(404).send({error: 404, message: 'Contact not found'});
            res.send(doc);
        })
        .catch((err) => next(err));
    },
    post (req, res, next) {
        contact.insert({
            name: req.body.name,
            title: req.body.title,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            company: req.body.company
        })
        .then((doc) => res.send(doc))
        .catch((err) => next(err))
    },
    put (req, res, next) {
        contact.findOne({_id:req.params.id})
        .then((doc) => { 
            if(!doc) return {error: 404, message: 'Contact not found'};            
            return contact.update({_id:req.params.id}, {
                name : (req.body.name !== undefined ? req.body.name : doc.name),
                title : (req.body.title !== undefined ? req.body.title : doc.title),
                email : (req.body.email !== undefined ? req.body.email : doc.email),
                phone : (req.body.phone !== undefined ? req.body.phone : doc.phone),
                address : (req.body.address !== undefined ? req.body.address : doc.address),
                company : (req.body.company !== undefined ? req.body.company : doc.company)
            }) 
        })
       .then((result) => {
            if(result.error != undefined) {
                res.status(result.error).send(result)
            }else{
                res.send(result)                
            }
        })
        .catch((err) => next(err));
    },
    delete (req, res, next){
        contact.findOne({_id:req.params.id})
        .then((doc) => { 
            if(!doc) return {error: 404, message: 'Contact not found'};            
            return contact.remove({_id:req.params.id}) 
        })
        .then((result) => {
            if(result.error != undefined) {
                res.status(result.error).send(result)
            }else{
                res.send(result)                
            }
        })
        .catch((err) => next(err));
    }

})
