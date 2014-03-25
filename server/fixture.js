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

models.workspaces.create({
	name: "HDSR Algemeen", 
    visibility: 3, 
    lon_lat_zoom: "5.1546478271484375,52.00559666088289,10", 
    order: 0
}).complete(function (err, workspace) {
	models.workspaceitems.create({
		"order": 1, 
		"visibility": true, 
		"opacity": 100, 
		"style": null
	}).complete(function (err, item) {
		workspace.setWorkspaceItems([item]);
		models.layers.create({
        "layer_name": "a_keringen,b_keringen,c_keringen", 
        "display_name": "Landelijk Primaire keringen", 
        "styles": "", 
        "format": "image/png", 
        "height": "256", 
        "width": "256", 
        "tiled": "true", 
        "transparent": "true", 
        "wms_url": "http://test-geoserver1.lizard.net/geoserver/deltaportaal/wms", 
        "opacity": null, 
        "type": "wms", 
        "options": JSON.stringify({
            "buffer": 0, 
            "isBaseLayer": false, 
            "opacity": 1.0
        })
    }).complete(function (err, source) {
    	item.setLayer(source);
	    });
	})
})

	// app.get('/api/v1/account', function (req, res) {
	// 	var result = {
	// 	    "initialPeriod": "1m", 
	// 	    "authenticated": true, 
	// 	    "user": 
	// 	    "initialZoom": ""
	// 	};
	// 	res.send(result);
	// });

models.account.create({
    "initialPeriod": "1m", 
    "authenticated": true,
    "initialZoom": ""
}).complete(function (err, account) {
	models.user.create({
        "username": "fritz.vandeventer", 
        "first_name": "Fritz", 
        "last_name": "van Deventer"
    }).complete(function (err, user) {
    	account.setUser(user);
    })
})