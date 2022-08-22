const Vay = require('../mode/vay');
const mogos = require('../../util/mogosse');
const { mutilOj } = require('../../util/mogosse');

class Siltescontrouller {
    index(req, res){
        Vay.find({})
        .then(vays => {
            
            res.render('home', { 
                vays: mutilOj(vays)
            }
        )})
        .catch(err => next(err))

       

        // res.render('home');
    }

    search(req, res){
        res.render('search');
    }

    
}

module.exports = new Siltescontrouller;