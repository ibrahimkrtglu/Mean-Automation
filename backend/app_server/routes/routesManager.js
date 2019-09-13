var routeLogin=require('./loginRoutes');
var routeHome=require('./homeRoutes');
var routeSignup=require('./signupRoutes');
var routeKullanicilarListesi=require('./kullanicilarlistesiRoutes');
var routeKullaniciSil=require('./kullanicisilRoutes');
var routeAdminLogin=require('./adminloginRoutes');
var routeAdminPanel=require('./adminpanelRoutes');
var routeKullaniciPanel=require('./kullanicipanelRoutes');
var routeKullaniciEkle=require('./kullaniciekleRoutes');
var routeYoneticiEkle=require('./yoneticiekleRoutes');
var routeYoneticilerListesi=require('./yoneticilerlistesiRoutes');
var routeYoneticiSil=require('./yoneticisilRoutes');


module.exports=function(app){
    app.use('/login',routeLogin);
    app.use('/',routeHome);
    app.use('/signup',routeSignup);
    app.use('/kullanicilarlistesi',routeKullanicilarListesi);
    app.use('/kullanicisil',routeKullaniciSil);
    app.use('/adminlogin',routeAdminLogin);
    app.use('/adminpanel',routeAdminPanel);
    app.use('/kullanicipanel',routeKullaniciPanel);
    app.use('/kullaniciekle',routeKullaniciEkle);
    app.use('/yoneticiekle',routeYoneticiEkle);
    app.use('/yoneticilerlistesi',routeYoneticilerListesi);
    app.use('/yoneticisil',routeYoneticiSil);
    

    
}