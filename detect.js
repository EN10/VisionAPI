var express = require("express");
var app = express();
var exec = require('child_process').exec;
var fs = require('fs');

const Vision = require('@google-cloud/vision');
const projectId = 'vision-123';
const fileName = 'image.jpg';
const visionClient = Vision({
  projectId: projectId
});

app.get("/", function(req, res) {
  var output = '';
  
  if (req.query.url != undefined){
    var dl = 'curl ' + req.query.url + ' > image.jpg';
    exec(dl, function(error, stdout, stderr) {
      console.log(stderr);

      visionClient.detectLabels(fileName)
        .then((results) => {
          const labels = results[0];
          console.log('Labels:');
          labels.forEach((label) => output+=label+'<br>');
          console.log(output);
          res.send(output);
        });
        
    });
  }
    
  if (req.query.img != undefined){
    var data = req.query.img.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFile('image.jpg', data, {encoding: 'base64'}, function(err){
      console.log(err);

      visionClient.detectLabels(fileName)
        .then((results) => {
          const labels = results[0];
          console.log('Labels:');
          labels.forEach((label) => output+=label+'<br>');
          console.log(output);
          res.send(output);
        });

    });
  }
});

app.listen(80, function() {
    console.log('server running');
});