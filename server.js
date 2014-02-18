var express = require('express');
 
var app = express();

app.get('/', function(req, res) {
	//statische HTML-Datei ausliefern
	res.sendfile(__dirname + '/index.html');
});
 
//GET auf Gruppenliste
app.get('/gruppen', function(req, res) {
	
});

//POST auf Gruppenliste
app.post('/gruppen', function(req, res) {
    
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