module.exports.AdminPanelGet=function(req,res){
    res.render('adminpanel');
}
module.exports.AdminPanelPost=function(req,res){
    console.log(req.body);
    res.render('adminpanel',{
        username:req.body.username,
        password:req.body.password
    });

    
}