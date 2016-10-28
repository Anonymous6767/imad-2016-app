var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var app = express();

var config={
    user:"anonymous6767",
    database:"anonymous6767",
    port:"5432",
    host:"db.imad.hasura-app.io",
    password:process.env.DB_PASSWORD
};
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/aticle-one',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'aticle-one.html'));
});
app.get('/aticle-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'aticle-two.html'));
   
});
app.get('/aticle-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'aticle-three.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString(""));
});
app.get('/submit-name/name', function (req, res) {
    var names=req.params.name;
    
    
    names.push(name);
    res.send(JSON.stringify(names));

});
//
var pool=new Pool(config);
app.get('/test-db',function(req,res){
    //select
    //make a response
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var names=[];

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
