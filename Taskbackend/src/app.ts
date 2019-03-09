import "./Database/db";
var express = require('express');
var app = express();

import * as bodyParser from "body-parser";



var routeapi = require('./app/routes/index')



app.use(function (req:any, res:any, next:any) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json());

app.use('/api', routeapi);




app.use(function(req :any, res :any, next :any) {
    var err = new Error('Not Found');
    
    res.status(404);
    res.json(err.message)
});



module.exports = app;