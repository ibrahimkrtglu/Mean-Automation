var Yonetici = require('../models/yonetici');
module.exports.YoneticiSilGet=function(req,res){
    Yonetici.find(function(err,results){
        return res.json({yoneticiler:results});
    });
}

module.exports.yoneticiSil=function(req,res){
    Yonetici.findOneAndRemove({YoneticiKullaniciAdi:req.params.YoneticiKullaniciAdi},function(err){
        if(err){
            console.log('silmede hata var');
        }
        else{
            return res.json({success:"true"});
        }
    });
    
}


