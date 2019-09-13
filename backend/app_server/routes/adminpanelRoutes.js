var express=require('express');


var router=express.Router();

var ctrlAdminLogin=require('../controller/adminpanelController');
router.get('/',ctrlAdminLogin.AdminPanelGet);
router.post('/',ctrlAdminLogin.AdminPanelPost);

module.exports=router;