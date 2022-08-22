const Vay = require('../mode/vay');
const mogos = require('../../util/mogosse');
const { muti } = require('../../util/mogosse');

class Giohangtescontrouller {
    index(req, res){
        res.render('./giohang');
    }
    // delete(req , res, next){
    //     Vay.deleteOne({_id : req.params.id})
    //     .then(() => res.redirect('back'))
    //     .catch(next);
    // }
   

}

module.exports = new Giohangtescontrouller;