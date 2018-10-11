var express =require("express");
var hbs=require("hbs");
var app=express();
hbs.registerPartials(__dirname+"/views/partials")
app.use(express.static(__dirname+"/public"));
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

app.get('/',(req,res)=>{
    res.send({
        name:'sajid',
        list:['java','.net','angular','nodejs']
    });
});

app.get('/about',(req,res)=>{
    res.render("about.hbs",{
        headerProp:'About',
        welcomeProp:'Welcome to our page...',
       
    });
});
app.get('/help',(req,res)=>{
    res.render("help.hbs",{
        headerProp:'Help',
       
    });
});


app.listen(3000,()=>{
    console.log('server is up at port number 3000')
});