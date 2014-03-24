var views = require('./views');
var express = require('express');

function setup(app) {
	app.get('/api/v1/annotations/search', views.annotations);
	app.get('/api/v1/collages', views.collages);
	app.get('/api/v1/account', function (req, res) {
		var result = {
		    "initialPeriod": "1m", 
		    "authenticated": true, 
		    "user": {
		        "username": "fritz.vandeventer", 
		        "first_name": "Fritz", 
		        "last_name": "van Deventer"
		    }, 
		    "initialZoom": ""
		};
		res.send(result);
	});
	app.get('/api/v1/version', function (req, res) {
		var result = {
		    "version": "0.5.dev0"
		};
		res.send(result);
	});
	app.get('/api/v1/:table', views.primitives.list);
	app.get('/api/v1/:table/:id', views.primitives.one);
}

exports.setup = setup;