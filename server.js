var express = require('express');
var fs = require('fs');
var brackets = require('brackets');

var app = express();
app.use(express.json());
app.use('/brackets', brackets())
var database = 'data.json';

function write_json(data, filename) {
	fs.writeFile(filename, JSON.stringify(data, null, 4), function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log('JSON-Datei geschrieben')
		}
	});
}

function read_json(filename, callback) {
	fs.readFile(filename, 'utf8', function(err, data){
		if(err) {
			console.log(err);
		}
		data = JSON.parse(data);
		callback(data);
	});
}

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	//statische HTML-Datei ausliefern
	res.sendfile(__dirname + '/index.html');
});

app.get('/app.js', function(req, res) {
	//statische Javascript-Datei ausliefern
	res.sendfile(__dirname + '/app.js');
});
 
//GET auf Gruppenliste
app.get('/gruppen', function(req, res) {
	read_json(database, function(data){
		res.send(data);
	});
});

//POST auf Gruppenliste
app.post('/gruppen', function(req, res) {
	read_json(database, function(data) {
		data.push(req.body);
		write_json(data, database);
		res.end(JSON.stringify({'message': 'Daten erfolgreich in die Datei geschrieben'}));
	});
});

//GET auf einzelne Gruppe
app.get('/gruppen/:id', function(req, res) {
    
});

//DELETE auf einzelne Gruppe
app.delete('/gruppen/:id', function(req, res) {
    
});

//PUT auf einzelne Gruppe
app.put('/gruppen/:id', function(req, res) {
    
});

app.listen(3000);
console.log('HTTP-Server läuft auf Port 3000');