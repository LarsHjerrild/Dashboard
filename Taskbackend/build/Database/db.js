"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var task_entry_schema_1 = require("./Schemas/task-entry-schema");
var dbURI = process.env.TASK_MONGODB_URI;
mongoose_1.connect(dbURI, { useNewUrlParser: true });
mongoose_1.connection.on("error", console.error.bind(console, "connection error:"));
mongoose_1.connection.once("open", function (arg) {
    console.log("Connected to database");
});
mongoose_1.model("taskEntry", task_entry_schema_1["default"]);
