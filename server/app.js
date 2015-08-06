var express = require('express');
var path = require('path');
var adj1 = require('./public/data/adj1.json');
var adj2 = require('./public/data/adj2.json');
var noun = require('./public/data/noun.json');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/adj1", function(req, res){
    res.json(adj1);
});
app.get("/adj2", function(req, res){
    res.json(adj2);
});
app.get("/noun", function(req, res){
    res.json(noun);
});

app.use("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'),function(){
    console.log("Server is running on port: " + app.get('port'));
});

