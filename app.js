var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/app/public'));

var server = app.listen(process.env.PORT, function() {
    console.log('App is running. Go to: https://for-client-node-tpham045.c9users.io');
});