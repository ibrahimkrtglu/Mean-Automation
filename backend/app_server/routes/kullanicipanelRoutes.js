var express=require('express');


var router=express.Router();

var ctrlKullaniciPanel=require('../controller/kullanicipanelController');
router.get('/',ctrlKullaniciPanel.KullaniciPanelGet);
router.post('/',ctrlKullaniciPanel.KullaniciPanelPost);

module.exports=router;