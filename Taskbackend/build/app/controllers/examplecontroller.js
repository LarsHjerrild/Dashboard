"use strict";
exports.__esModule = true;
var examplemodel_1 = require("../../Models/examplemodel");
var mongoose_1 = require("mongoose");
require('../../Models/examplemodel');
var logic = require('../../BLL/examplelogic');
var taskEntry = mongoose_1.model("taskEntry");
module.exports.getentry = function (req, res) {
    logic.ExampleBLL(5, 3).then(function (data) {
        if (!data) {
            console.log('Error');
            res.status(503);
            res.json('fuck');
        }
        res.status(200);
        res.json(data);
    });
};
module.exports.postModelitem = function (req, res) {
    var tmp = examplemodel_1.TASKS[0];
    var newEntry = new taskEntry(examplemodel_1.TASKS[0]);
    newEntry.save().then(function (data) {
        res.status(201);
        res.json(data.id);
    });
};
module.exports.getModelitem = function (req, res) {
    var tmp = examplemodel_1.TASKS;
    res.status(200);
    res.json(tmp);
};
