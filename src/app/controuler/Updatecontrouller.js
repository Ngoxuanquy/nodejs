const Vay = require('../mode/vay');
const mogos = require('../../util/mogosse');
const { muti,mutilOj } = require('../../util/mogosse');
const vay = require('../mode/vay');

class Updatetescontrouller {
    update(req, res){
        Vay.find({})
        .then(vays => 
            res.render('./update', {
                vays: mutilOj(vays)
            }))
    }

    edit(req, res){
        Vay.findById(req.params.id)
        .then(vay => 
            res.render('./edit', {
                vay: muti(vay) 
            }))
    }

    update_fake(req, res, next){
        vay.updateOne({ _id : req.params.id},req.body)
        .then(() => res.redirect('/update'));


    }

}

module.exports = new Updatetescontrouller;