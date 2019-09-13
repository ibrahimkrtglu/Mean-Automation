var Kullanici = require('../models/kullanici');
module.exports.KullanicilarListesiGet=function(req,res){
    Kullanici.find(function(err,results){
   
    return res.json({kullanicilar:results});
    });
    
}

