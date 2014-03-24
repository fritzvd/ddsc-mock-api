var models = require('./models');

var primitives = {
	list: function (req, res, next) {
		var list, 
			options = {};
		if (req.params.table == 'locations') {
			options.include = [{model: models.timeseries}];
		} else if (req.params.table == 'timeseries') {
			// options.include = [models.locations, models.events];
		} else if (req.params.table == 'events') {
			// options.where = {timeseries.uuid: req.params.id};
		} else if (req.params.table == 'workspaces') {
			options.include = [{
				model: models.workspaceitems, 
				include: [models.layers]
			}];
		} else if (req.params.table == 'workspaceitems') {
			options.include = [models.layers];
		} else if (req.params.table == 'layers') {
			options.include = [];
		} else {
			res.send('not implemented');
			return;
		}
		models[req.params.table].findAll(options)
			.success(function (list) {
				var result = list;
				if (req.params.table == 'timeseries') {
					result = [];
					list.forEach(function (item) {
						item.dataValues.events = 'http://localhost:3000/api/v1/events/' + item.id;
						result.push(item);
						console.info(item)
					});
				}
				var response = {
					results: result
				}
				res.send(response);
			});
	},
	one: function (req, res) {
		var thing,
			query = req.params.id;
		if (req.params.table == 'events') {
			query = {where: {'TimeseriesId': req.params.id}};
			models[req.params.table].findAll(query)
			.complete(function (err, thing) {
				var results = {
					results: thing
				}
				res.send(results);
			});
		} else {
			models[req.params.table].find(query)
			.complete(function (err, thing) {
				res.send(thing);
			});			
		}
	}
}

var annotations = function (req, res) {
	res.send({
    "count": 59, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "id": 7, 
            "location": null, 
            "related_model_str": "WSM O317", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/7", 
            "category": "ddsc", 
            "text": "test", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "125", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-04-15T11:46:54.578Z", 
            "updated_at": "2013-04-15T11:46:54.579Z"
        }, 
        {
            "id": 8, 
            "location": null, 
            "related_model_str": "WSM O317", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/8", 
            "category": "ddsc", 
            "text": "test", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "125", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-04-15T11:46:54.577Z", 
            "updated_at": "2013-04-15T11:46:54.577Z"
        }, 
        {
            "id": 9, 
            "location": null, 
            "related_model_str": "WSM O317", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/9", 
            "category": "ddsc", 
            "text": "test", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "125", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-04-15T11:47:41.155Z", 
            "updated_at": "2013-04-15T11:47:41.155Z"
        }, 
        {
            "id": 35, 
            "location": null, 
            "related_model_str": "1043", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/35", 
            "category": "ddsc", 
            "text": "Test Annotatie", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "69", 
            "datetime_from": "2013-04-02T22:00:00Z", 
            "datetime_until": "2013-04-17T22:00:00Z", 
            "tags": "", 
            "created_at": "2013-04-22T15:01:50.252Z", 
            "updated_at": "2013-04-22T15:01:50.252Z"
        }, 
        {
            "id": 36, 
            "location": null, 
            "related_model_str": "Waterhoogte bij Deventer", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/36", 
            "category": "ddsc", 
            "text": "Test", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "11673", 
            "datetime_from": "2013-04-01T22:00:00Z", 
            "datetime_until": "2013-04-09T22:00:00Z", 
            "tags": "", 
            "created_at": "2013-04-22T15:31:52.770Z", 
            "updated_at": "2013-04-22T15:31:52.770Z"
        }, 
        {
            "id": 37, 
            "location": null, 
            "related_model_str": "Waterhoogte bij Deventer", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/37", 
            "category": "ddsc", 
            "text": "hkjhkj", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "11673", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-04-22T15:32:13.865Z", 
            "updated_at": "2013-04-22T15:32:13.865Z"
        }, 
        {
            "id": 41, 
            "location": null, 
            "related_model_str": "Macrostability Observer South dike", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/41", 
            "category": "ddsc", 
            "text": "Test", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "1811", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-04-22T17:34:47.903Z", 
            "updated_at": "2013-04-22T17:34:47.903Z"
        }, 
        {
            "id": 91, 
            "location": null, 
            "related_model_str": "Piekfrequentie bij A12 Boei", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/91", 
            "category": "ddsc", 
            "text": "Hier gaat er iets mis.", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "11613", 
            "datetime_from": "2013-05-22T08:00:00Z", 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-06T13:05:28.669Z", 
            "updated_at": "2013-05-06T13:05:28.669Z"
        }, 
        {
            "id": 103, 
            "location": null, 
            "related_model_str": "Waterhoogte bij Wijk bij Duurstede", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/103", 
            "category": "ddsc", 
            "text": "Test. Oh Ja", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "12064", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-08T09:25:30.033Z", 
            "updated_at": "2013-05-08T09:25:30.034Z"
        }, 
        {
            "id": 154, 
            "location": null, 
            "related_model_str": "Waterhoogte bij Edam", 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/154", 
            "category": "ddsc", 
            "text": "Test.Fritz", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "11696", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-23T11:41:04.243Z", 
            "updated_at": "2013-05-23T11:41:04.243Z"
        }, 
        {
            "id": 171, 
            "location": [
                52.9784158294106, 
                2.1148681640624996
            ], 
            "related_model_str": null, 
            "visibility": "private", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/171", 
            "category": "ddsc", 
            "text": "Test. Ja", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-30T08:54:28.596Z", 
            "updated_at": "2013-05-30T08:54:28.596Z"
        }, 
        {
            "id": 19, 
            "location": null, 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/19", 
            "category": "ddsc", 
            "text": "afsdfasdfkjl", 
            "username": "fritz.vandeventer", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "91", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-04-18T13:42:16.505Z", 
            "updated_at": "2013-04-18T13:42:16.505Z"
        }, 
        {
            "id": 83, 
            "location": null, 
            "related_model_str": "TemperatureType", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/83", 
            "category": "ddsc", 
            "text": "weer een annotatie", 
            "username": "bakkenist", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "269", 
            "datetime_from": "2013-08-09T22:00:00Z", 
            "datetime_until": "2013-09-16T22:00:00Z", 
            "tags": "kroon", 
            "created_at": "2013-05-06T11:24:07.696Z", 
            "updated_at": "2013-05-06T11:24:07.696Z"
        }, 
        {
            "id": 109, 
            "location": [
                50.75454061863395, 
                6.020808219909668
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/109", 
            "category": "ddsc", 
            "text": "Sensor A gemonteerd ", 
            "username": "HLink", 
            "picture_url": "", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-12T20:18:51.001Z", 
            "updated_at": "2013-05-12T20:19:48.141Z"
        }, 
        {
            "id": 30, 
            "location": null, 
            "related_model_str": "WSM A01", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/30", 
            "category": "ddsc", 
            "text": "een annotatie", 
            "username": "HLink", 
            "picture_url": "http://www.fugro.nl/images/grond-in-de-grond-72783-09600200.jpg", 
            "the_model_name": "timeseries", 
            "the_model_pk": "4259", 
            "datetime_from": "2013-04-09T22:00:00Z", 
            "datetime_until": "2013-04-11T22:00:00Z", 
            "tags": "bla bla", 
            "created_at": "2013-04-22T14:53:18.440Z", 
            "updated_at": "2013-07-03T09:28:49.928Z"
        }, 
        {
            "id": 125, 
            "location": [
                54.95869417101661, 
                3.834228515625
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/125", 
            "category": "ddsc", 
            "text": "Test foto Android (mislukt, foto toevoegen via pc)", 
            "username": "christiaan.jacobs", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/23/2013-05-15%2011.07.27.jpg", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-15T09:07:38.885Z", 
            "updated_at": "2013-07-03T09:28:49.518Z"
        }, 
        {
            "id": 173, 
            "location": null, 
            "related_model_str": "Grecht_Raai_2_B_PorePr", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/173", 
            "category": "ddsc", 
            "text": "Test annotatie 30-5", 
            "username": "E_Langius", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/41/dijkdoorbraak_west.mp4", 
            "the_model_name": "timeseries", 
            "the_model_pk": "10735", 
            "datetime_from": "2013-05-30T09:00:00Z", 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-30T10:49:54.747Z", 
            "updated_at": "2013-07-03T09:28:50.718Z"
        }, 
        {
            "id": 176, 
            "location": [
                53.21590163025062, 
                6.5533447265625
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/176", 
            "category": "ddsc", 
            "text": "Annotatie 30 mei 14.15", 
            "username": "reinder.wolthuis", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/44/IMAG0035.jpg", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-05-30T12:16:16.308Z", 
            "updated_at": "2013-07-03T09:28:50.836Z"
        }, 
        {
            "id": 196, 
            "location": null, 
            "related_model_str": "OMZD_29,9_1_WSP_SH", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/196", 
            "category": "ddsc", 
            "text": "GeoBeads sensor raai 29-9 ", 
            "username": "p.vliet", 
            "picture_url": "http://api.ddsc.nl/api/v1/annotations/files/57/Z-Veldinfra_Raai_29_9.JPG", 
            "the_model_name": "timeseries", 
            "the_model_pk": "12193", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "GeoBeads", 
            "created_at": "2013-07-08T14:58:16.320Z", 
            "updated_at": "2013-07-08T15:00:41.812Z"
        }, 
        {
            "id": 187, 
            "location": [
                53.351787316908315, 
                6.898802518844604
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/187", 
            "category": "ddsc", 
            "text": "veldsituatie bij daglicht ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/51/IMG_DMC_Ommelanderzeedijk.jpg", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-06-19T12:42:58.778Z", 
            "updated_at": "2013-08-29T13:26:42.050Z"
        }, 
        {
            "id": 225, 
            "location": [
                6.898392892042005, 
                53.35060995818877
            ], 
            "related_model_str": "OMZD meetraai DP29,9", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/225", 
            "category": "ddsc", 
            "text": "Dwarsdoorsnede", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/60/DP_29.9.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14085", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:05:36.257Z", 
            "updated_at": "2013-09-24T14:05:36.328Z"
        }, 
        {
            "id": 226, 
            "location": [
                6.893869867552153, 
                53.36433537522615
            ], 
            "related_model_str": "OMZD meetraai DP31,5", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/226", 
            "category": "ddsc", 
            "text": "Dwarsdoorsnede", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/61/DP_31.5.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14088", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:07:03.970Z", 
            "updated_at": "2013-09-24T14:07:04.044Z"
        }, 
        {
            "id": 227, 
            "location": [
                6.89796470637327, 
                53.35231343433817
            ], 
            "related_model_str": "OMZD meetraai DP30,1", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/227", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/62/Dwarsraai_30_1-30_2.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14086", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:11:31.770Z", 
            "updated_at": "2013-09-24T14:11:31.852Z"
        }, 
        {
            "id": 228, 
            "location": [
                6.888201006436989, 
                53.38017720816584
            ], 
            "related_model_str": "OMZD meetraai DP33,4", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/228", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/63/Dwarsraai_33_4.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14089", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:12:58.484Z", 
            "updated_at": "2013-09-24T14:12:58.592Z"
        }, 
        {
            "id": 229, 
            "location": [
                6.887224961122938, 
                53.395991429570024
            ], 
            "related_model_str": "OMZD meetraai DP35,5", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/229", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/64/Dwarsraai_35_5.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14090", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:13:39.160Z", 
            "updated_at": "2013-09-24T14:13:39.237Z"
        }, 
        {
            "id": 230, 
            "location": [
                6.874278925699169, 
                53.407027631729505
            ], 
            "related_model_str": "OMZD meetraai DP37,0", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/230", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/65/Dwarsraai_37_0%20(1).jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14091", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:14:52.811Z", 
            "updated_at": "2013-09-24T14:14:52.870Z"
        }, 
        {
            "id": 231, 
            "location": [
                6.245581193386913, 
                53.41408616906274
            ], 
            "related_model_str": "LMD meetraai 3 DP 87,0", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/231", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/66/Dwarsraai%2087_0.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14382", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:19:00.156Z", 
            "updated_at": "2013-09-24T14:19:00.234Z"
        }, 
        {
            "id": 232, 
            "location": [
                6.259482132620759, 
                53.413276176298176
            ], 
            "related_model_str": "LMD meetraai 2 DP 86,0", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/232", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/67/Dwarsraai%2086_0.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14381", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:20:20.179Z", 
            "updated_at": "2013-09-24T14:20:20.222Z"
        }, 
        {
            "id": 233, 
            "location": [
                6.272795649724993, 
                53.40910572565442
            ], 
            "related_model_str": "LMD meetraai 1 DP 85,0", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/233", 
            "category": "ddsc", 
            "text": "Dwarsraai", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/68/Dwarsraai%2085_0.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14380", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-09-24T14:22:23.560Z", 
            "updated_at": "2013-09-24T14:22:23.641Z"
        }, 
        {
            "id": 247, 
            "location": [
                51.115471479759634, 
                4.256000518798828
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/247", 
            "category": "ddsc", 
            "text": "Grondplan Hingene Oost", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/77/100GP07R.pdf", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T09:29:10.592Z", 
            "updated_at": "2013-10-14T09:29:10.592Z"
        }, 
        {
            "id": 248, 
            "location": [
                51.11479796906991, 
                4.242095947265625
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/248", 
            "category": "ddsc", 
            "text": "Grondplan Hingene West", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/78/100GP08R.pdf", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T09:31:43.387Z", 
            "updated_at": "2013-10-14T09:31:43.387Z"
        }, 
        {
            "id": 249, 
            "location": [
                51.1145689731991, 
                4.248790740966797
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/249", 
            "category": "ddsc", 
            "text": "Dwarsprofielen Grondplan Hingene", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/79/100dp0110-04360_04390-JLU.pdf", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T09:33:28.561Z", 
            "updated_at": "2013-10-14T09:33:28.561Z"
        }, 
        {
            "id": 245, 
            "location": [
                51.11704745641057, 
                4.258146286010742
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/245", 
            "category": "ddsc", 
            "text": "Geotechnisch onderzoek, Legger en Inspectiegegevens ", 
            "username": "bakkenist", 
            "picture_url": "https://www.dropbox.com/s/5ttmes7bw20ludo/Overzicht%20relevante%20documenten%20geotechnisch%20onderzoek%20Locatie%20Hingene.docx", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-10T14:52:51.675Z", 
            "updated_at": "2013-10-10T14:57:40.810Z"
        }, 
        {
            "id": 250, 
            "location": [
                4.250925, 
                51.113172
            ], 
            "related_model_str": "Hingene ERT Longitudinal 2012", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/250", 
            "category": "ddsc", 
            "text": "Longitudinal ERT profile \r\nopname 09/03/2012", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/80/Longitudinal%20ERT%20profile_verwerkte%20data.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14432", 
            "datetime_from": "2013-09-02T22:00:00Z", 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T10:23:33.490Z", 
            "updated_at": "2013-10-14T10:24:22.259Z"
        }, 
        {
            "id": 251, 
            "location": [
                4.250619, 
                51.113233
            ], 
            "related_model_str": "Hingene ERT Transverse 2012", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/251", 
            "category": "ddsc", 
            "text": "Hingene Transverse ERT 2012", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/81/Transverse%20ERT%20profile_verwerkte%20data.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14433", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T10:29:36.009Z", 
            "updated_at": "2013-10-14T10:29:36.092Z"
        }, 
        {
            "id": 252, 
            "location": [
                4.24368, 
                51.11334
            ], 
            "related_model_str": "Hingene ERT Zone A 2008", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/252", 
            "category": "ddsc", 
            "text": "Opname ERT zone A 2008", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/82/08_022_Diijken_Antwerpen_zoneA%20-%20Gtec%20&%20IMDC.pdf", 
            "the_model_name": "location", 
            "the_model_pk": "14434", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T10:47:49.910Z", 
            "updated_at": "2013-10-14T10:47:50.004Z"
        }, 
        {
            "id": 253, 
            "location": [
                4.25175, 
                51.11369
            ], 
            "related_model_str": "Hingene ERT Zone B 2008", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/253", 
            "category": "ddsc", 
            "text": "Opname ERT Zone B 2008 ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/83/08_022_Dijken_Antwerpen_zoneB%20-%20Gtec%20&%20IMDC.pdf", 
            "the_model_name": "location", 
            "the_model_pk": "14435", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T10:50:03.527Z", 
            "updated_at": "2013-10-14T10:50:30.603Z"
        }, 
        {
            "id": 254, 
            "location": [
                4.25609, 
                51.11461
            ], 
            "related_model_str": "Hingene ERT Zone D 2008", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/254", 
            "category": "ddsc", 
            "text": "Opname ERT zone D 2008", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/84/08_022_Dijken_Antwerpen_zoneD%20-%20Gtec%20&%20IMDC.pdf", 
            "the_model_name": "location", 
            "the_model_pk": "14436", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T10:51:49.359Z", 
            "updated_at": "2013-10-14T10:51:49.429Z"
        }, 
        {
            "id": 255, 
            "location": [
                4.24968797763735, 
                51.11343847925405
            ], 
            "related_model_str": "Bornem_PB", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/255", 
            "category": "ddsc", 
            "text": "Locatie peilbuis HIngene\r\nopname: 2013/06/19", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/85/Locatie%20peilbuis%20Hingene%20200130619.pdf", 
            "the_model_name": "location", 
            "the_model_pk": "14292", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T10:58:57.911Z", 
            "updated_at": "2013-10-14T10:58:57.989Z"
        }, 
        {
            "id": 256, 
            "location": [
                51.11294576405363, 
                4.24771785736084
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/256", 
            "category": "ddsc", 
            "text": "Bevroren Kwelplekken op weg\r\nopnamedatum: 2012/02/08 ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/89/P1010033.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T11:07:55.838Z", 
            "updated_at": "2013-10-15T10:01:05.603Z"
        }, 
        {
            "id": 257, 
            "location": [
                4.249065690842019, 
                51.113440295415415
            ], 
            "related_model_str": "Bornem_L1", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/257", 
            "category": "ddsc", 
            "text": "Locatie meetsysteem L1", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/87/Locatie%20L1%20(4).JPG", 
            "the_model_name": "location", 
            "the_model_pk": "14293", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-14T11:21:01.297Z", 
            "updated_at": "2013-10-14T11:21:01.367Z"
        }, 
        {
            "id": 259, 
            "location": null, 
            "related_model_str": "Dwarsdoorsnede IJkdijk oost", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/259", 
            "category": "ddsc", 
            "text": "Dwarsdoorsnede IJkdijk oost ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/92/IJkdijk%20dwarsdoorsnede%20oost.jpg", 
            "the_model_name": "timeseries", 
            "the_model_pk": "14700", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-15T12:00:36.341Z", 
            "updated_at": "2013-10-16T08:39:20.587Z"
        }, 
        {
            "id": 260, 
            "location": null, 
            "related_model_str": "Dwarsdoorsnede IJkdijk west", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/260", 
            "category": "ddsc", 
            "text": "Dwarsdoorsnede IJkdijk west  ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/93/IJkdijk%20plattegrond%20west.jpg", 
            "the_model_name": "timeseries", 
            "the_model_pk": "14699", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-15T12:01:02.891Z", 
            "updated_at": "2013-10-16T08:39:38.773Z"
        }, 
        {
            "id": 262, 
            "location": null, 
            "related_model_str": "Plattegrond IJkdijk west", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/262", 
            "category": "ddsc", 
            "text": "Plattegrond IJkdijk west  ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/95/IJkdijk%20plattegrond%20west.jpg", 
            "the_model_name": "timeseries", 
            "the_model_pk": "14702", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-15T12:01:54.838Z", 
            "updated_at": "2013-10-16T08:39:50.349Z"
        }, 
        {
            "id": 263, 
            "location": null, 
            "related_model_str": "Plattegrond IJkdijk oost", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/263", 
            "category": "ddsc", 
            "text": "Plattegrond IJkdijk oost ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/96/IJkdijk%20plattegrond%20oost.jpg", 
            "the_model_name": "timeseries", 
            "the_model_pk": "14701", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-15T12:02:14.339Z", 
            "updated_at": "2013-10-16T08:39:59.141Z"
        }, 
        {
            "id": 265, 
            "location": null, 
            "related_model_str": "Luchtfoto IJkdijk", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/265", 
            "category": "ddsc", 
            "text": "Luchtfoto IJkdijk  ", 
            "username": "bakkenist", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/97/luchtfoto.jpg", 
            "the_model_name": "timeseries", 
            "the_model_pk": "14703", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-16T08:31:22.712Z", 
            "updated_at": "2013-10-16T08:39:34.668Z"
        }, 
        {
            "id": 271, 
            "location": [
                4.91822441047888, 
                52.308797138798695
            ], 
            "related_model_str": "VNDR Proefvak meetraai 2", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/271", 
            "category": "ddsc", 
            "text": "As built tekening Proefvak", 
            "username": "caspar.ter.brake", 
            "picture_url": "https://www.dropbox.com/s/zzybtk8klzrw93a/as%20built%20tekening%20veenderij.pdf", 
            "the_model_name": "location", 
            "the_model_pk": "14190", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-17T09:29:58.849Z", 
            "updated_at": "2013-10-17T09:29:58.878Z"
        }, 
        {
            "id": 272, 
            "location": [
                4.91815, 
                52.30847
            ], 
            "related_model_str": "VNDR_PV_1", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/272", 
            "category": "ddsc", 
            "text": "Meetopzet VNDR_IMG_VegetatieStress1 ", 
            "username": "caspar.ter.brake", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/98/VNDR_IMG_Vegetatiestress1.jpg", 
            "the_model_name": "location", 
            "the_model_pk": "14192", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-10-21T11:47:00.775Z", 
            "updated_at": "2013-10-21T11:48:04.401Z"
        }, 
        {
            "id": 273, 
            "location": [
                51.11322528338537, 
                4.249826073646545
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/273", 
            "category": "ddsc", 
            "text": "bevroren kwellocaties tijdens aanbrengen sensoren (feb2012) ", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/99/P1010036_bevroren%20kwelplek.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:20:11.060Z", 
            "updated_at": "2013-11-25T09:21:12.651Z"
        }, 
        {
            "id": 274, 
            "location": [
                4.249627873457851, 
                51.11327877853508
            ], 
            "related_model_str": "Bornem_R3", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/274", 
            "category": "ddsc", 
            "text": "Vochtprobe R3 met sensoren", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/100/IMG_0742_omhooggetrokken%20probe%20R3.JPG", 
            "the_model_name": "location", 
            "the_model_pk": "14298", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:22:46.331Z", 
            "updated_at": "2013-11-25T09:22:46.415Z"
        }, 
        {
            "id": 278, 
            "location": [
                4.249572850426504, 
                51.11353148363355
            ], 
            "related_model_str": "Bornem_R1", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/278", 
            "category": "ddsc", 
            "text": "locatie R1", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/104/Locatie%20R1%20(3).JPG", 
            "the_model_name": "location", 
            "the_model_pk": "14296", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:30:32.676Z", 
            "updated_at": "2013-11-25T09:30:32.871Z"
        }, 
        {
            "id": 279, 
            "location": [
                4.249097272071112, 
                51.11336337358901
            ], 
            "related_model_str": "Bornem_L2", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/279", 
            "category": "ddsc", 
            "text": "datastation S4121", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/105/Datastation%20S4121%20(1).JPG", 
            "the_model_name": "location", 
            "the_model_pk": "14294", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:33:07.385Z", 
            "updated_at": "2013-11-25T09:33:07.490Z"
        }, 
        {
            "id": 281, 
            "location": [
                51.11344755056284, 
                4.250330328941344
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/281", 
            "category": "ddsc", 
            "text": "datastations vocht- en druksensoren", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/107/Datastations_gezien%20vanaf%20R2.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:35:10.950Z", 
            "updated_at": "2013-11-25T09:35:10.950Z"
        }, 
        {
            "id": 282, 
            "location": [
                51.11281779078327, 
                4.242380261421204
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/282", 
            "category": "ddsc", 
            "text": "natte plekken feb2013", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/108/IMG_0102_kwellocatie.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:36:32.560Z", 
            "updated_at": "2013-11-25T09:36:32.560Z"
        }, 
        {
            "id": 283, 
            "location": [
                51.113440815209536, 
                4.259428381919861
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/283", 
            "category": "ddsc", 
            "text": "natte plekken feb2013", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/109/IMG_0099_kwellocatie.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:37:42.427Z", 
            "updated_at": "2013-11-25T09:37:42.427Z"
        }, 
        {
            "id": 284, 
            "location": [
                51.11321854799965, 
                4.251065254211426
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/284", 
            "category": "ddsc", 
            "text": "schets locaties bevroren kwelplekken feb2012", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/110/schets%20ijsplekken%20doorsijpeling.bmp", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:38:55.596Z", 
            "updated_at": "2013-11-25T09:38:55.596Z"
        }, 
        {
            "id": 275, 
            "location": [
                51.11326569567897, 
                4.251987934112549
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/275", 
            "category": "ddsc", 
            "text": "bevroren kwellocatie feb2012 ", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/101/P1010040_bevroren%20kwelplek.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T09:25:50.040Z", 
            "updated_at": "2013-11-25T11:20:57.563Z"
        }, 
        {
            "id": 286, 
            "location": [
                51.11346102126651, 
                4.251499772071838
            ], 
            "related_model_str": null, 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/286", 
            "category": "ddsc", 
            "text": "bevroren kwelplek feb2012", 
            "username": "klaaspieter.visser", 
            "picture_url": "https://api.ddsc.nl/api/v1/annotations/files/112/P2130037_plaatsing%20senoren%20en%20kabels.JPG", 
            "the_model_name": null, 
            "the_model_pk": null, 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2013-11-25T11:20:34.271Z", 
            "updated_at": "2013-11-25T11:20:34.271Z"
        }, 
        {
            "id": 287, 
            "location": null, 
            "related_model_str": "OMZD_31,5_2_WSP_SH", 
            "visibility": "public", 
            "url": "http://api.ddsc.nl/api/v1/annotations/detail/287", 
            "category": "ddsc", 
            "text": "Test \r\n", 
            "username": "janmaarten.verbree", 
            "picture_url": "", 
            "the_model_name": "timeseries", 
            "the_model_pk": "12209", 
            "datetime_from": null, 
            "datetime_until": null, 
            "tags": "", 
            "created_at": "2014-02-26T10:44:25.569Z", 
            "updated_at": "2014-02-26T10:45:11.051Z"
        }
    ]
	});
}

var collages = function (req, res) {
	res.send({results: [{
		    "id": 99, 
		    "visibility": "private", 
		    "collageitems": [
		        {
		            "id": 149, 
		            "url": "http://api.ddsc.nl/api/v1/collageitems/149", 
		            "collage": "http://api.ddsc.nl/api/v1/collages/99", 
		            "graph_index": 0, 
		            "timeseries": []
		        }, 
		        {
		            "id": 150, 
		            "url": "http://api.ddsc.nl/api/v1/collageitems/150", 
		            "collage": "http://api.ddsc.nl/api/v1/collages/99", 
		            "graph_index": 1, 
		            "timeseries": []
		        }, 
		        {
		            "id": 151, 
		            "url": "http://api.ddsc.nl/api/v1/collageitems/151", 
		            "collage": "http://api.ddsc.nl/api/v1/collages/99", 
		            "graph_index": 2, 
		            "timeseries": []
		        }, 
		        {
		            "id": 152, 
		            "url": "http://api.ddsc.nl/api/v1/collageitems/152", 
		            "collage": "http://api.ddsc.nl/api/v1/collages/99", 
		            "graph_index": 3, 
		            "timeseries": []
		        }
		    ], 
		    "url": "http://api.ddsc.nl/api/v1/collages/99", 
		    "name": "Test-Jan"
			}]});
}

module.exports = {
	primitives: primitives,
	annotations: annotations,
	collages: collages
};