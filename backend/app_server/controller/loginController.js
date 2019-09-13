var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt');
var Kullanici= require('../models/kullanici');

module.exports.LoginGet=function(req,res){
    res.render('login');
}
module.exports.LoginPost=function(req,res){
    console.log(req.body);
    res.render('login',{
        
    });
}

module.exports.sign_in = function(req, res) {
    Kullanici.findOne({
      kullaniciAdi: req.body.kullaniciAdi
    }, function(err, user) {
      if (err) throw err;
      if (!user) {
       return res.json({ message: 'Kullanıcı bulunamadı' });
      } else if (user) {
        if (!user.comparePassword(req.body.sifre)) {
         return res.json({ message: 'Şifre yanlış' });
        } else {
          return res.json({success:true,token: jwt.sign({ ad: user.ad, soyad: user.soyad, _id: user._id,
          
          },'your secret',{expiresIn:604800}, 'RESTFULAPIs'),user:{id:user._id,ad:user.ad,soyad:user.soyad,email:user.email,kullaniciAdi:user.kullaniciAdi,sifre:user.sifre}});
        }
      }
    });
  };

  module.exports.loginRequired=function(req,res,next){
      if(req.user){
          next();
      }else{
          return res.status(401).json({message:'Unauthorized user!'});
      }
  }