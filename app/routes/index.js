'use strict';

module.exports = function(app, db){

	app.route('/').get(function(req, res){

		res.render('index');
	});

	app.route('/new').get(function(req, res){
		res.render('index', {
			err: "Error : Url passed is not proper"
		});
	});
};
