var express=require('express');

var app=express();

app.use(express.static(__dirname+'/'));

//hosting static files
app.get('/jquery',function(req,res){
    
    res.redirect('/project4/views/index.html');
});

app.get('/',function(req,res){
    
    res.send("Hello world");
});

app.get('/projects1',function(req,res){
    
    res.redirect('/projects1/views/assignment1.html');
});



app.listen(4200,function(req,res){
    
    console.log("server running at port 4200:localhost:4200");
});
