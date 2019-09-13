var express=require('express');


var router=express.Router();

var ctrlHome=require('../controller/homeController');
router.get('/',ctrlHome.HomeGet);
router.post('/',ctrlHome.HomePost);

module.exports=router;