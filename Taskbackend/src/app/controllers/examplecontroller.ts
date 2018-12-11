import { Task, TASKS, PRIORITIES } from "../../Models/examplemodel";
import { model } from "mongoose";
import { ITaskEntryDocument } from "../../Models/task-entry.model";
require('../../Models/examplemodel')
var logic = require('../../BLL/examplelogic')

const taskEntry = model<ITaskEntryDocument>("taskEntry");


module.exports.getentry = function (req: any, res: any) {

    logic.ExampleBLL(5, 3).then((data: number) => {
        if (!data) {

            console.log('Error')
            res.status(503)
            res.json('fuck')
        }
        res.status(200);
        res.json(data);
    })
}

module.exports.postModelitem = function (req: any, res: any) {

    let tmp: Task = TASKS[0];

    const newEntry = new taskEntry(TASKS[0]) 

    newEntry.save().then( data => {
        res.status(201);
        res.json(data.id);

    });

}

module.exports.getModelitem = function (req: any, res: any) {

    // let tmp :ExamleModelClass = {item1: 6, item2: 'Awesome'}
    let tmp: Task[] = TASKS

    res.status(200);
    res.json(tmp);
    // var tmp: ExamleModelClass {
    //     item1 = 6,
    //     item2 = 'Cool'
    // };
    // tmp.item1 = 6;
    // tmp.item2 = 'Cool'

    // logic.ExampleBLLUsingModel(tmp).then((data: ExamleModelClass) => {

    //     res.status(200);
    //     res.json(data);
    // })
}