var express=require('express');


var router=express.Router();

var ctrlAdminLogin=require('../controller/adminloginController');
router.get('/',ctrlAdminLogin.AdminLoginGet);
router.post('/',ctrlAdminLogin.adminsign_in);

module.exports=router;