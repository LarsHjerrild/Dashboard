"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
require('../Models/examplemodel');
module.exports.ExampleBLL = function (a1, a2) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        var tmp = a1 * a2;
        resolve(tmp);
    });
};
