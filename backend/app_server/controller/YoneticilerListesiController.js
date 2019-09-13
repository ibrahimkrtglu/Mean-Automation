var Yonetici = require('../models/yonetici');
module.exports.YoneticilerListesiGet=function(req,res){
    Yonetici.find(function(err,results){
   
        return res.json({yoneticiler:results});
    });
    
}

