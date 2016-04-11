'use strict'

module.exports = function(app, db){
	app.route('/:url').get(handleget);
	app.get('/new/:url', handlepost);
	

	function handleget(req, res){
		var url  = process.env.APP_URL + req.params.url;
		if(url != process.env.APP_URL + 'favicon.ico')
		{
			findURL(url, db, res);
		}
	
	};

	function handlepost(req, res)
	{
		var urlobj = {};
		urlobj = {
		"params" : req.params,
		"req" : req
		};
		res.send(urlobj);
	
	};

};

