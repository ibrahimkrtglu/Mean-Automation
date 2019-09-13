var express =require('express');
var router=express.Router();
var ctrlYoneticiEkle = require('../controller/yoneticiekleController');

router.get('/',ctrlYoneticiEkle.YoneticiEkleGet);
router.post('/',ctrlYoneticiEkle.YoneticiEklePost);

module.exports=router;