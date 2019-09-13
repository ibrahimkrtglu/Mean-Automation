var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt');
var Yonetici= require('../models/yonetici');

module.exports.AdminLoginGet=function(req,res){
    res.render('adminlogin');
}
module.exports.AdminLoginPost=function(req,res){
    console.log(req.body);
    res.render('adminlogin',{
        
    });}
    module.exports.adminsign_in = function(req, res) {
      console.log("girdi controller");
        Yonetici.findOne({
          YoneticiKullaniciAdi: req.body.YoneticiKullaniciAdi
        }, function(err, admin) {
          if (err) throw err;
          if (!admin) {
           return res.json({ message: 'Admin Bulunamadı' });
          } else if (admin) {
            if (!admin.comparePassword(req.body.sifre)) {
            return  res.json({ message: 'Parola yanlış' });
            } else {
              return res.json({success:true,token: jwt.sign({ ad: admin.ad, soyad: admin.soyad, _id: admin._id,
              
              },'your secret',{expiresIn:604800}, 'RESTFULAPIs'),admin:{id:admin._id,ad:admin.ad,soyad:admin.soyad,email:admin.email,YoneticiKullaniciAdi:admin.YoneticiKullaniciAdi,sifre:admin.sifre}});
            }
          }
        });
      };
    
      module.exports.loginRequired=function(req,res,next){
        if(req.user){
            next();
        }else{
            return res.status(401).json({message:'Unauthorized admin!'});
        }
    }