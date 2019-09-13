var express =require('express');
var router=express.Router();
var ctrlSignUp = require('../controller/signupController');

router.get('/',ctrlSignUp.signupGet);
router.post('/',ctrlSignUp.signupPost);

module.exports=router;