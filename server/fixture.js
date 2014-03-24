var models = require('./models');

var location1, timeseries1;
eventsList = [];
models.locations.create({
	uuid: 'pietje',
	name: 'WestDijk',
	shown_on_map: true,
	owner: 'fritz',
	point_geometry: "[54.5, 4.3]"
}).complete(function (err, location) {
	var timeseries1 = models.timeseries.create({
	latest_timestamp: Date.now(),
	uuid: 'henkie',
	value_type: 'float',
	paramater: 'cholrine',
	unit: 'm'
	}).complete(function (err, timeseries) {
		console.info(err, location);
		location.setTimeserieses([timeseries])
		models.events.create({
			datetime: Date.now(),
			flag: null,
			value: Math.random()
			}).complete(function (err, events) {
				eventsList.push(events);
			});
		models.events.create({
			datetime: Date.now(),
			flag: null,
			value: Math.random()
			}).complete(function (err, events) {
				eventsList.push(events);
			});
		models.events.create({
			datetime: Date.now(),
			flag: null,
			value: Math.random()
			}).complete(function (err, events) {
				eventsList.push(events);
				timeseries.setEvents(eventsList);
			});
	});
	// console.info(err, user);
});

// models.user.create({
// 	id: 1,
// 	username: 'henk',
// 	password: 'i-am-henk'
// }).complete(function (err, user) {
// 	henk = user
// 	// console.info(err, user);
// });



