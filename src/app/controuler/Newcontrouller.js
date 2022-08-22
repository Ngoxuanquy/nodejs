const Vay = require('../mode/vay');
const mogos = require('../../util/mogosse');
const { mutilOj } = require('../../util/mogosse');



var STT ;
var mang=[];
var gan ;
var fake_gan1 ='';

class Newscontrouller {
    index(req, res){
    //     Vay.find({})
    //     .then(vays => {
            
    //     //     res.render('new', { 
    //     //         vays: mutilOj(vays)
    //     // })
        
    //         for(var i =0 ; i < vays.length; i++){
    //             if(vays[i].STT == Number.parseInt(req.query.q)  ){
    //                 res.send(`<h1>`+vays[i].STT +`</h1>
    //                 <img src="`+vays[i].img+`"/>
    //                 <h1>`+vays[i].name +`</h1><h1>`+vays[i].Gia+`</h1>
    //                 <a href="new/giohang" >` +"Thêm" +`</a>`) 
    //             } 
    //         }
    //     })
    //     .catch()
  
    // STT = Number.parseInt(req.query.q);
  
    }
    
 
    show(req, res){
        res.send('hello');
    }
    // giohang(req, res){
    //     Vay.find({})
    //     .then(vays => {
    //         for(var i =0 ; i < vays.length; i++){
    //             if(vays[i].STT == STT  && fake_gan1[i] != STT){
    //                   fake_gan1 = [...fake_gan1,vays[i].STT];
    //                  gan = "<h1>"+ vays[i].STT+ "</h1><img src='"+vays[i].img+"'/><button> Xóa </button>"

    //                  mang.push(gan);
    //                  console.log(fake_gan1)
                     
                        
    //                     console.log(mang[0]);
    //                     for(var a= 0 ; a < mang.length; a++ ){
    //                         var aa  ;
    //                         aa = aa +  mang[a]
    //                         // console.log(aa);
    //                     }
    //                     res.send(aa);
    //                 }
    //                 else {
    //                     console.log("có rồi")
    //                  }
    //             }
            
    //         })
    //         .catch()
    // }
}
 

module.exports = new Newscontrouller;
