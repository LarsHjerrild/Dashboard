"use strict";
exports.__esModule = true;
require("mocha");
require('../../Models/examplemodel');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
var server = require('../../app');
describe('GetAllTasks function:', function () {
    it('should return all tasks', function (done) {
        chai.request('http://localhost:3000')
            .get('/api/model')
            .end(function (err, res) {
            res.should.have.status(200);
            done();
        });
    });
});
