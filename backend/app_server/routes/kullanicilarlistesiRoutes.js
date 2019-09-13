var express=require('express');


var router=express.Router();

var ctrlKullanicilarListesi=require('../controller/KullanicilarListesiController');
router.get('/',ctrlKullanicilarListesi.KullanicilarListesiGet);


module.exports=router;