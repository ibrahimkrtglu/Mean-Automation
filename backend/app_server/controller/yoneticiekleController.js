var Yonetici = require('../models/yonetici');
var bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.YoneticiEkleGet=function(req,res){
    res.render('yoneticiekle');
}
module.exports.YoneticiEklePost=function(req,res){
    
var yeniyonetici=new Yonetici({
ad:req.body.ad,
soyad:req.body.soyad,
email:req.body.email,
YoneticiKullaniciAdi:req.body.YoneticiKullaniciAdi,
sifre:bcrypt.hashSync(req.body.sifre,saltRounds)
});

yeniyonetici.save(function(err){
    if(err){
        return  res.json({success:false,msg:"failed to register user"});
    }
    else{
        return  res.json({success:true,msg:"admin registered"});
    }
});


}
