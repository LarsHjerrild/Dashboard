"use strict";
exports.__esModule = true;
require("./Database/db");
var express = require('express');
var app = express();
var routeapi = require('./app/routes/index');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/api', routeapi);
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    res.status(404);
    res.json(err.message);
});
module.exports = app;
