var Kullanici = require('../models/kullanici');

module.exports.KullaniciSilGet=function(req,res){
    Kullanici.find(function(err,results){
        return res.json({kullanicilar:results});
    });
}

module.exports.kullaniciSil=function(req,res){
    
    Kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
        if(err) throw err;
        else
        return res.json({success:"true"});
    });
    
}



