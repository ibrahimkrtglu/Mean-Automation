var mongoose=require('mongoose');

var bcrypt=require('bcrypt');
var Schema =mongoose.Schema;

var kullaniciSchema=new Schema({
    ad:String,
    soyad:String,
    email:String,
    kullaniciAdi:{type:String,required:true,unique:true},
    sifre:{type:String,required:true}
},{collection:'kullanicilar'});

kullaniciSchema.methods.comparePassword=function(password){
    return bcrypt.compareSync(password,this.sifre);
}

var Kullanici =mongoose.model('Kullanici',kullaniciSchema);

module.exports=Kullanici;