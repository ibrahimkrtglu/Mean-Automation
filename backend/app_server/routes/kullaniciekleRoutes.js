var express =require('express');
var router=express.Router();
var ctrlKullaniciEkle = require('../controller/kullaniciekleController');

router.get('/',ctrlKullaniciEkle.KullaniciEkleGet);
router.post('/',ctrlKullaniciEkle.KullaniciEklePost);

module.exports=router;