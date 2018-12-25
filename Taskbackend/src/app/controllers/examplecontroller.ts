import { Response, Request, NextFunction } from "express";
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

module.exports.postModelitem = function (
    req: Request,
    res: Response) {

    const newEntry = new taskEntry({
        name: req.body["name"],
        description: req.body["description"],
        creation_date: new Date(),
        due_date: new Date(req.body["due_date"]),
        category: req.body["category"],
        priority: req.body["priority"],
        goal_origin: req.body["goal_origin"],
        time_estimate: req.body["time_estimate"]
    });

    newEntry.save().then(data => {
        res.status(201);
        res.json(newEntry._id);

    });

}


module.exports.getModelitem = function (req: any, res: any) {

    // let tmp :ExamleModelClass = {item1: 6, item2: 'Awesome'}
    //let tmp: Task[] = TASKS

    taskEntry.find().then((data) => {
        res.status(200);
        res.json(data);
    })


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


module.exports.updateModelitem = function (
    req: Request,
    res: Response
) {
    console.log("trying to update item")

    console.log(req.body['priority'])

    const id = req.body["_id"]
    console.log(id)
    // const newEntry = new taskEntry({
    //     name: req.body["name"],
    //     description: req.body["description"],
    //     creation_date: new Date(),
    //     due_date: new Date(req.body["due_date"]),
    //     category: req.body["category"],
    //     priority: req.body["priority"],
    //     goal_origin: req.body["goal_origin"],
    //     time_estimate: req.body["time_estimate"]
    // });
    console.log(req.body["name"])

    taskEntry.findById(id).exec(function(err, data) {
        console.log(data)
    })

    // taskEntry.updateOne({"_id": id)},{$set:{"name": req.body["name"]}})
}

module.exports.deleteModelitem = function (
    req: Request,
    res: Response
) {
    console.log("trying to delete item")

    const id = req.params.id
    console.log(id)
   
    taskEntry.deleteOne({_id: id}).exec((data) => {
        
        res.status(202);
    })

}