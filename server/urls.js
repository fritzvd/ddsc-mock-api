var views = require('./views');

function setup(app) {
	app.get('/api/v1/:table', views.primitives.list);
	app.get('/api/v1/:table/:id', views.primitives.one);
}
 
exports.setup = setup;