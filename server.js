var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
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
app.get('/submit-name/name', function (req, res) {
    var names=req.params.name;
    
    
    names.push(name);
    res.send(JSON.stringify(names));

});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
var mains=function(){
    $(".dropdown-toggle").click(function() {
    $(".dropdown-menu").toggle();
  });
};
$(document).ready(main);