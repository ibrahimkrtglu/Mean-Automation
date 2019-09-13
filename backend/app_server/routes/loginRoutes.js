var express=require('express');


var router=express.Router();

var ctrlLogin=require('../controller/loginController');
router.get('/',ctrlLogin.LoginGet);
router.post('/',ctrlLogin.sign_in);

module.exports=router;