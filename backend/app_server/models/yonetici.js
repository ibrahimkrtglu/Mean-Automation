var mongoose=require('mongoose');
var bcrypt=require('bcrypt');


var Schema = mongoose.Schema;

var yoneticiSchema=new Schema({
    ad:String,
    soyad:String,
    email:String,
    YoneticiKullaniciAdi:{type:String,required:true,unique:true},
    sifre:{type:String,required:true}
},{collection:'yoneticiler'});

yoneticiSchema.methods.comparePassword=function(password){
return bcrypt.compareSync(password,this.sifre);
}

var Yonetici =mongoose.model('Yonetici',yoneticiSchema);

module.exports=Yonetici;