var express=require('express');


var router=express.Router();

var ctrlYoneticilerListesi=require('../controller/YoneticilerListesiController');
router.get('/',ctrlYoneticilerListesi.YoneticilerListesiGet);


module.exports=router;