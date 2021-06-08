const express = require ('express');
const fs = require('fs');
const cors = require ('cors');
const ytdl = require ('ytdl-core');
const http = require('http');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.listen(port, () => {
  console.log('Server start');
});

app.get('/', function(req, res){
  fs.readFile('main.js', function(err, data){
    if(err){
      console.log(err)
    }
    else{
      res.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"});
      res.end(data);
    }
  });
});

app.get('/download', function(req,res){
   var url = req.param('url');
   var fileName = req.param('fileName');

  res.header('Content-type: audio/mpeg')
  res.header('Content-disposition', 'attachment; filename='+ fileName + ".mp3");

  ytdl(url, {
  format: 'mp3'
  }).pipe(res);
 });
