var express = require('express');
var server = express();
var bodyParser = require('body-parser')
server.use(bodyParser.json());
var cors = require('cors');

server.use(cors())


server.use('/', express.static(__dirname + '/dist'))


server.listen(3001,function(){
  console.log("3001 cors ")
})