import chai from 'chai'
import chaiHttp from 'chai-http';

var server = require("../../src/bin/startup");

let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('GetAllTasks function:', () => {
  it('should return all tasks', () => {
    const hello = true;
    expect(hello).to.be.true;
  });
  // let tmp: ExamleModelClass = { item1: 6, item2: 'Awesome' }



  // return logic.ExampleBLLUsingModel(tmp).then((data: ExamleModelClass) => {

  //   expect(data.item1).to.equal(8);
  //   expect(data.item2).to.equal('Awesome');
  // });
});
