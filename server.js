'use strict'
var express = require('express');
var mongo = require('mongodb').MongoClient;
var path = require('path');
var api = require('./app/api/url-shortener.js');
var routes = require('./app/routes/index.js');
require('dotenv').config({silent :true});
var app = express();

mongo.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener', function(err, db){

	if(err)
		throw err;
	else
		console.log('database connection established');

	db.createCollection("sites",{
		capped : true,
		size : 5242880,
		max : 5000
	});

routes(app, db);
api(app, db);

var port = process.env.PORT || 8080;

app.listen(port);

});


