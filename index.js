require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var PORT = 10000;
var app = express();
app.use(express.static('public/burger/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine('handlebars', expressHandlebars(
    {   
        defaultLayout: 'main', 
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
);
app.set('view engine', 'handlebars');

//routing
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);

app.listen(PORT, function(){
    console.log('Server listening on ', PORT);
});