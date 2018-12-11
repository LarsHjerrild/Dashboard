"use strict";
exports.__esModule = true;
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
    console.log("Request gotten");
    var newEntry = new taskEntry({
        name: req.body["name"],
        description: req.body["description"],
        creation_date: new Date(),
        due_date: new Date(req.body["due_date"]),
        category: req.body["category"],
        priority: req.body["priority"],
        goal_origin: req.body["goal_origin"],
        time_estimate: req.body["time_estimate"]
    });
    newEntry.save().then(function (data) {
        res.status(201);
        res.json(newEntry._id);
    });
};
module.exports.getModelitem = function (req, res) {
    taskEntry.find().then(function (data) {
        res.status(200);
        res.json(data);
    });
};
