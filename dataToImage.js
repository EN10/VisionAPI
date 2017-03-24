var express = require("express");
var app = express();
var fs = require('fs');

app.get("/", function(req, res) {
var data = req.query.q.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFile('image.jpg', data, {encoding: 'base64'}, function(err){
        console.log(err);
    });
console.log('image saved!');
res.send('image saved!');
});

app.listen(80, function() {
    console.log("server running");
});