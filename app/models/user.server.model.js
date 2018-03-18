'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.set('bufferCommands', false);

/**
 * User Schema
 */
var loginSchema = new Schema({
	username:String,
  password:String
},{collection:"login"});

mongoose.model('login', loginSchema);
