'use strict';

var config = require('../../config/config');
var request = require('request');
var mongoose = require('mongoose');

exports.index = function(req, res) {
	var Configuration = new Object();
	Configuration.AirBNB_URL = config.AirBNB_URL;
	res.render('../app/views/index', Configuration);
};

exports.login = function(req, res) {
	console.log("req.body.username:", req.body.username);
	mongoose.model('login').findOne({username:req.body.username,password:req.body.password},function (err, result) {
		console.log("err:", err);
		console.log("result:", result);
		res.send(result);
	});
};
