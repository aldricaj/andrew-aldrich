
'use strict';

const express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"
const path = require('path');
const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));


let viewsPath = path.join(__dirname,'views');
app.set('views', viewsPath);
app.engine('handlebars', exphbs({defaultLayout: 'main',layoutsDir:viewsPath + '/layouts', partialsDir: viewsPath + '/partials'}));
app.set('view engine', 'handlebars');

app.post('/contact-me', emailAndrew); 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/english-recast', function (req, res) {
    res.render('recast');
});

function emailAndrew(req, res) {
    res.status(200); // Shhhhhhhh! I'm lazy
    res.send();
}

// THESE FUNCTIONS MUST GO LAST!
app.use(function(req, res) {
	res.type('text/html');
	res.status(404);
	res.render('404');
});

app.listen(app.get('port'), function(){
	console.log("Listining on port: " + app.get('port'));
});