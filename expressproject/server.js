const express = require('express');
const app =express();
const port=8000;
app.get('/', function(req,res){
       res.send({message:"root api calling",status:1});
});

app.get('/home', function(req,res){
    res.send({message:"home api calling",status:1});
});
app.get('/contact', function(req,res){
    res.send({message:"contact api calling",status:1});
});
app.get('/about', function(req,res){
    res.send({message:"about api calling",status:1});
});
app.post('/register', function(req,res){
    var amount =500
    res.send({message:"register api calling",status:1,amount:amount});
});
app.listen(port,function(){
    console.log(`server listeninin on http://localhost:${port}`);
})