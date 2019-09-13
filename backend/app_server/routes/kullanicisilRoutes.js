var express=require('express');

var express=require('express');

var router=express.Router();

var ctrlKullaniciSil=require('../controller/KullaniciSilController');

router.get('/',ctrlKullaniciSil.KullaniciSilGet);
router.delete('/sil/:kullaniciAdi',ctrlKullaniciSil.kullaniciSil);



module.exports=router;