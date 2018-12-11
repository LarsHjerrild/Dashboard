import { Promise } from 'es6-promise'

require('../Models/examplemodel')

module.exports.ExampleBLL = function (a1: number, a2: number): Promise<number> {

    return new Promise(function (resolve, reject) {

        var tmp: number = a1 * a2;
        resolve(tmp)
    });
}

// module.exports.ExampleBLLUsingModel = function (a1: ExamleModelClass): Promise<ExamleModelClass> {

//     return new Promise(function (resolve, reject) {

//         a1.item1 += 2;
//         resolve(a1);
//     });
// }