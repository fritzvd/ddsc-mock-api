var models = require('./models');

models.db.drop().success(function (error) {
	if (!!error) {
		console.log('An error occured:', error);
		process.exit();		
	}
	else {
		models.db.sync({force: true})
			.complete(function (error) {
				if (!!error) {
					console.log('An error occured:', error);
					process.exit();
				} else {
					console.log('synced tables');
					process.exit();
				}	
			});	
	}
})
