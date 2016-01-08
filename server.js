var bodyParser = require('body-parser');

var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.set('views', './views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.render('index');
});

app.use('/', validateName, scrubName); 
	var slang = 
	{'selfie': 'self-portrait',
	'yummers': 'delicious',
	'bruh': 'wow',
	'outchea': 'are out here',
	'doge': 'pug',
	'cilantro': 'soap',
	'bae': 'loved one',
	'swag': 'style',
	'yolo': 'carpe diem'};
// validation of data sent to my server
function validateName (req, res, next){
		console.log(req.body.slang);
		if(!req.body.slang) {
			res.status(400);
			return res.send("Please provide a sentence with a 'slang' word.");	
		}
		return next();
}
// sanatizing your data or scrubbiing your data
function scrubName(req, res, next){
		console.log(req.body.slang);
		var message = req.body.slang;
		var stringArray = message.split(' ');
		for (var i = 0; i < message.length; i++) {
			if(slang[stringArray[i]]){
				stringArray[i] = slang[stringArray[i]];
			}
		}
		stringArray = stringArray.join(' ');
		res.locals.slang = stringArray;
		console.log(stringArray);
		return next();
}

app.post('/', function(req, res){
	var message = res.locals.slang;
	res.send(message);
});

var server = app.listen(3000, function (){
	var port = server.address().port;
	console.log('Server listening on port', port);
});