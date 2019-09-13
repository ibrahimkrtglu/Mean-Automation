var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost:27017/NodeProje';

mongoose.connect(mongoDB,{useNewUrlParser:true});

mongoose.connection.on(`connected`,()=>{
console.log("mongoose baglandi");
});

mongoose.connection.on(`error`,(err)=>{
    console.log(err);
    });