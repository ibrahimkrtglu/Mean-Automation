var Kullanici = require('../models/kullanici');
var bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports.signupGet=function(req,res){
    res.render('signup');
}
module.exports.signupPost=function(req,res){
    
var yenikullanici=new Kullanici({
ad:req.body.ad,
soyad:req.body.soyad,
email:req.body.email,
kullaniciAdi:req.body.kullaniciAdi,
sifre:bcrypt.hashSync(req.body.sifre,saltRounds)
});

yenikullanici.save(function(err){
    if(err){
      return  res.json({success:false,msg:"failed to register user"});
    }
    else{
      return  res.json({success:true,msg:"user registered"});

    }
});


}
