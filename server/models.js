// models.js
var Sequelize = require('sequelize');
var sequelize = new Sequelize('ddsc-mock', 'fritz', 'fritz', {
	dialect: 'postgres',
	port: 5432
});

var location = sequelize.define('Location', {
	uuid: Sequelize.STRING,
	name: Sequelize.STRING,
	shown_on_map: Sequelize.BOOLEAN,
	owner: Sequelize.STRING,
	point_geometry: Sequelize.STRING,
}, {
	paranoid: true
});

var timeseries = sequelize.define('Timeserie',{
	latest_timestamp: Sequelize.DATE,
	value: Sequelize.FLOAT(11),
	uuid: Sequelize.STRING,
	value_type: Sequelize.STRING,
	parameter: Sequelize.STRING,
	owner: Sequelize.STRING,
	unit: Sequelize.STRING,
});

var events = sequelize.define('Event',{
	datetime: Sequelize.DATE,
	flag: Sequelize.STRING,
	value: Sequelize.FLOAT(11)
});


location.hasMany(timeseries);
location.hasMany(location, {as: 'Sublocations'});
location.hasMany(location, {as: 'Superlocations'});
timeseries.belongsTo(location);
timeseries.hasMany(events);
events.belongsTo(timeseries);

module.exports = {
	locations: location,
	timeseries: timeseries,
	events: events,
	db: sequelize
};