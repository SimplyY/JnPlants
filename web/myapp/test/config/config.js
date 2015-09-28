var express = require('express'),
    fixtures = require('pow-mongodb-fixtures'),
    app = require('../../app'),
    data = require('./data'),
    mongoose;

mongoose = app.mongoose;

exports.fixtures = fixtures.connect(mongoose.connection.name);
exports.scenes = data.scenes;
exports.app = app;


exports.ready = function(callback) {
    callback();
};
