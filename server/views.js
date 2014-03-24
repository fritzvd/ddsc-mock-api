var models = require('./models');

var primitives = {
	list: function (req, res, next) {
		var list, 
			options = {};
		if (req.params.table == 'locations') {
			options.include = [{model: models.timeseries}];
		} else if (req.params.table == 'timeseries') {
			options.include = [models.locations, models.events];
		} else if (req.params.table == 'events') {
			options.include = [];
		} else {
			res.send('not implemented');
			return;
		}
		models[req.params.table].findAll(options)
			.success(function (list) {
				list = list;
				// console.info(list);
				res.send(list);
			});
	},
	one: function (req, res) {
		var thing;
		models[req.params.table].find(req.params.id)
		.complete(function (err, thing) {
			res.send(thing);
		});
	}
}


module.exports = {
	primitives: primitives
};