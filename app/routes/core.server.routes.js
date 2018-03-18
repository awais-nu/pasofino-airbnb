'use strict';
module.exports = function(app) {
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/login/').post(core.login);
}
