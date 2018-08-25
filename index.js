require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var PORT = 10000;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routing
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);

app.listen(PORT, function(){
    console.log('Server listening on ', PORT);
});