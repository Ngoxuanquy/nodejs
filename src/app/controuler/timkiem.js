const Vay = require('../mode/vay');
const mogos = require('../../util/mogosse');
const { muti, mutilOj } = require('../../util/mogosse');

class timkiem {
    index(req, res){
       
        Vay.find({})
        .then(vays => {
            vays.map(vay => {
                if( vay.name === req.body.tim ){
                res.render('./timkiem', { vay: muti(vay) })  
            }})
})

    }

}

module.exports = new timkiem;