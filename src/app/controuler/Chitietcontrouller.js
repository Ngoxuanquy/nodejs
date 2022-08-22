const Vay = require('../mode/vay');
const mogos = require('../../util/mogosse');
const { muti ,mutilOj } = require('../../util/mogosse');
const { deleteOne } = require('../mode/vay');
const { NULL } = require('node-sass');


const mangname = [];
const mangimg = [];
const mangid = [];
const mang_fake = [];
const ma = [];
const manggiohang = [];
const gan = "";



class CHitiettescontrouller {
    index(req, res , next){

        Vay.findOne({ slug: req.params.slug})
        .then((vay) => {
            // res.json(vay);
            res.render('./chitiet' , {vay: muti(vay) })
        })
        .catch(next);
    }

    create(req, res){
        res.render("./create");
    }

    cart(req, res){
            res.render('./cart', {mang_name : mangimg.map(mang => mang.name) ,
                mangimg : mangimg.map(mang => `<tr><td><input class="form-check-input" type="checkbox"
                value="<tr><td>`+1+`</td><td><img style=width:200px; height: 200px; src=`+mang.img+` /></td><td>`
                +mang.name + mang.size + mang.mau+`</td><td>`+mang.Gia+`</td>
                <td>`+mang.so+`</td> <td>`+mang.so * mang.Gia+`</td>"  name="Vayids[]" >
                </td><td>`+1+ `</td><td> <img style="width:200px; height: 200px;" src="`+mang.img+`" /> </td>
                <td>`+mang.name + `</td> <td>`+mang.Gia + `</td> <td>`+mang.so + `</td><td>`+mang.so * mang.Gia + `</td>
                <td> <button data-toggle="modal" data-id="`+mang.id+`" data-target="#exampleModal" > Xóa </button> </td> <td> Mua </td> 
                `) 
                })

            res.render('./cart' , { mangimg});
   
             }

    

    stort(req, res){
        // res.json(req.body);
        const vay = new Vay(req.body);
        vay.save();

        res.send("thành công");
    }

  
    
    giohang(req, res, next){
        const vay = new Vay(req.body);
        ma.map(m => {
        
            if(m.img !== req.body.img){
         
            }
        })
        if(mangname.join('').indexOf(vay.img) === -1  ){
                mangimg.push(
                {
                    id: vay.id,
                    name: req.body.name,
                    img: req.body.img,
                    so: req.body.so,
                    Gia: req.body.Gia,
                    size: req.body.size,
                    mau: req.body.mau

                })
                
            }
            mangname.push(vay.img);
            ma.push({
                img: req.body.img
            })
        
            


            res.render('./giohang', {mangimg : mangimg.map(mang => `<tr><td><input class="form-check-input" type="checkbox"
                value="<tr><td>`+1+`</td><td><img style=width:200px; height: 200px; src=`+mang.img+` /></td><td>`
                +mang.name +  `<br> Size: `+mang.size + `<br> Màu:` +mang.mau + `</td><td>`+mang.Gia+`</td>
                <td>`+mang.so+`</td> <td>`+mang.so * mang.Gia+`</td>"  name="Vayids[]" >
                </td><td>`+1+ `</td><td> <img style="width:200px; height: 200px;" src="`+mang.img+`" /> </td>
                <td>`+mang.name + `<br> Size: `+mang.size + `<br> Màu: ` +mang.mau+ `</td> <td>`+mang.Gia + `</td> <td>`+mang.so +  `</td><td>`+mang.so * mang.Gia + `</td>
                <td> <button data-toggle="modal" data-id="`+mang.id+`" data-target="#exampleModal" > Xóa </button> </td> <td> Mua </td> 
                `) 
            })
            mang_fake.push(
                {
                    id: vay.id,
                    name: vay.name,
                    img: vay.img,
                    so: req.body.so,
                    Gia: vay.Gia,
                    size: req.body.size,
                    mau : req.body.mau
                })
            mangid.push(vay.id);
            res.render('./giohang' , {vay: muti(vay)  , mangimg});
        }

            delete(req , res, next){
                   var gan1;
                mangimg.map(mang => {
                    
                     gan1 = mang['img'];
                    if(mang.id === req.params.id){
                         delete mang["id"]
                         delete mang["Gia"]
                         delete mang["name"]
                         delete mang["img"]
                         delete mang["so"]
                         delete mang["size"]
                         delete mang["mau"]


                        }
                    })
                    ma.map(mangn => {
                        if(mangn.img === gan1 ){
                              delete mangn["img"];
                        }
                    
                    })
                 
        
        
                    for(var i = 0 ; i < mangimg.length ; i++){
                        if(JSON.stringify(mangimg[i]) === '{}'){
                            mangimg.splice(i,1)
                        }
                    }
        
                    res.render('./giohang', { 
                         mangimg : mangimg.map(mang => `<tr><td><input class="form-check-input" type="checkbox" name="Vayids[]" value="<tr><td>`+mang.id+`</td><td><img style=width:200px; height: 200px; src=`+mang.img+` /></td><td>`+mang.name+mang.size +`</td><td>`+mang.Gia+`</td>
                         <td>`+mang.so+`</td> <td>`+mang.so * mang.Gia+`</td>""  />  </td><td>`
                         +1+ `</td><td> <img style="width:200px; height: 200px;" src="`+mang.img+`" /> </td>
                         <td>`+mang.name + `</td> <td>`+mang.Gia + `</td> <td>`+mang.so + `</td><td>`+mang.so * mang.Gia + `</td>
                         <td> <button data-toggle="modal" data-id="`+mang.id+`" data-target="#exampleModal" > Xóa </button> </td> <td> Mua </td> 
                         `) 
                        })
                    }
         

            Seclect(req,res ,next) {
                switch(req.body.hanhdong){
                    case 'delete': 
                    // manggiohang.push(`<tr><td>`+mang.id+`</td><td>`+ mang.img+`</td><td>`+mang.name+`</td><td>`+mang.Gia+`</td>
                    // <td>`+mang.so+`</td> <td>`+mang.so * mang.Gia+`</td>`);
                          res.render('./muahang' , {id: req.body.Vayids })
                        break;
                    default: 
                    res.json({mess: 'lỗi'});

                }
            }


        }

module.exports = new CHitiettescontrouller;