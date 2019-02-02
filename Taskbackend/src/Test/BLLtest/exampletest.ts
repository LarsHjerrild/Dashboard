import 'mocha';
require('../../Models/examplemodel')

let chai = require('chai');
let chaiHttp = require('chai-http');
// let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
let server = require('../../app')

describe('GetAllTasks function:', () => {
  it('should return all tasks', (done) => {
    chai.request('http://localhost:3000')
    .get('/api/model')
    .end((err: any, res: any) => {
          res.should.have.status(200);
      done();
    });
    // let tmp: ExamleModelClass = { item1: 6, item2: 'Awesome' }



    // return logic.ExampleBLLUsingModel(tmp).then((data: ExamleModelClass) => {

    //   expect(data.item1).to.equal(8);
    //   expect(data.item2).to.equal('Awesome');
    // });
  });
});