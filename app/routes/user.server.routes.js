'use strict';

module.exports = function(app) {
	var user = require('../../app/controllers/user.server.controller');
	app.route('/loadagreements').post(user.loadagreements);
};
