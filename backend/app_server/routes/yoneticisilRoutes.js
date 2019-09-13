var express=require('express');


var router=express.Router();

var ctrlYoneticiSil=require('../controller/YoneticiSilController');
router.get('/',ctrlYoneticiSil.YoneticiSilGet);
router.delete('/sil/:YoneticiKullaniciAdi',ctrlYoneticiSil.yoneticiSil);



module.exports=router;

