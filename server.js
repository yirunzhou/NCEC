const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const url = 'mongodb://localhost/NCEC';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

mongoose.connect(url);

app.use(express.static(__dirname + '/dist/NCOfficialWeb'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/NCOfficialWeb/index.html'));
});


var routes = require('./routes/topics');
routes(app);


app.listen(process.env.PORT || 8080);