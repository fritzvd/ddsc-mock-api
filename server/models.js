// models.js
var Sequelize = require('sequelize');
var sequelize = new Sequelize('ddsc-mock', 'fritz', 'fritz', {
	dialect: 'postgres',
	port: 5432
});

var account = sequelize.define('Account', {
	initialPeriod: Sequelize.STRING,
	authenticated: Sequelize.BOOLEAN,
	initialZoom: Sequelize.STRING,
	panner: Sequelize.BOOLEAN
});

var user = sequelize.define('User', {
	username: Sequelize.STRING,
	first_name: Sequelize.STRING,
	last_name: Sequelize.STRING
});

account.hasOne(user);
user.belongsTo(account);

// timeseries
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


// workspaces
var workspaces = sequelize.define('Workspace', {
	visibility: Sequelize.BOOLEAN,
    lon_lat_zoom: Sequelize.STRING, 
    order: Sequelize.INTEGER
});

var workspaceitem = sequelize.define('WorkspaceItem', {
	visibility: Sequelize.BOOLEAN,
    lon_lat_zoom: Sequelize.STRING, 
    order: Sequelize.INTEGER,
    opacity: Sequelize.INTEGER,
	style: Sequelize.STRING
});

var wms_source = sequelize.define('Layer', {
	layer_name: Sequelize.STRING,
	display_name: Sequelize.STRING,
	format: Sequelize.STRING,
	height: Sequelize.INTEGER,
	width: Sequelize.INTEGER,
	tiled: Sequelize.BOOLEAN,
	visibility: Sequelize.BOOLEAN,
	opacity: Sequelize.INTEGER,
	style: Sequelize.STRING,
	wms_url: Sequelize.STRING,
	options: Sequelize.STRING
});

workspaces.hasMany(workspaceitem);
workspaceitem.belongsTo(workspaces);
workspaceitem.hasOne(wms_source);
wms_source.belongsTo(workspaceitem);

module.exports = {
	locations: location,
	timeseries: timeseries,
	events: events,
	workspaces: workspaces,
	workspaceitems: workspaceitem,
	layers: wms_source,
	account: account,
	user: user,
	db: sequelize,
};