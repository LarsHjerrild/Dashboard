"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    name: String,
    description: String,
    creation_date: Date,
    category: {
        "enum": [
            'DEVELOPMENT',
            'RELATIONAL',
            'MUSIC',
            'ARTS',
            'SPORTS',
            'MAINTENANCE',
            'TRANSPORT',
            'LEARNING',
            'FOOD',
            'FUN'
        ]
    },
    priority: {
        "enum": [
            'LOW',
            'MEDIUM',
            'HIGH',
            'CRITICAL'
        ]
    },
    due_date: Date,
    goal_origin: String,
    time_estimate: Number
});
