var express = require('express');
var models = require('./models');
var routes = require('./urls');

// var server = express();
var app = express();
app.configure(function () {
	app.use(express.bodyParser());
	app.use('/', express.static('/vagrant/webclient/app'));
	app.all('*', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "http://localhost:7000");
	  res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
	app.use(app.router);
});

function start() {
	routes.setup(app);
	app.listen(3000);
};

start();