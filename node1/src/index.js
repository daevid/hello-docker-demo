var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello Docker Node1');
});

app.listen(8080);