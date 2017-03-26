var express = require("express");
var app = express();
var fs = require('fs');

const Vision = require('@google-cloud/vision');
const projectId = 'vision-123';
const fileName = 'image.jpg';
const visionClient = Vision({
  projectId: projectId
});

app.get("/", function(req, res) {
    if (req.query.q != undefined){
    var data = req.query.q.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFile('image.jpg', data, {encoding: 'base64'}, function(err){
        console.log(err);
    });
    console.log('Image Saved');
    
    var output = '';
    visionClient.detectLabels(fileName)
      .then((results) => {
        const labels = results[0];

        console.log('Labels:');
        labels.forEach((label) => output+=label+'<br>');
        res.send(output);
        console.log(output);
      });
    }
});

app.listen(80, function() {
    console.log('server running');
});