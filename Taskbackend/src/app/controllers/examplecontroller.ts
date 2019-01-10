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
        console.log("wee")
        res.json("_id: well");
    });

}


module.exports.getModelitem = function (req: any, res: any) {
    taskEntry.find().then((data) => {
        res.status(200);
        res.json(data);
    })
}


module.exports.updateModelitem = function (
    req: Request,
    res: Response
) {
    taskEntry.updateOne({ '_id': req.body["_id"] }, {
        $set: {
            'name': req.body["name"],
            'description': req.body["description"],
            'due_date': new Date(req.body["due_date"]),
            'category': req.body["category"],
            'priority': req.body["priority"],
            'goal_origin': req.body["goal_origin"],
            'time_estimate': req.body["time_estimate"]
        }
    }, () => {


        res.status(202);
        res.json("_id :" + req.body["_id"])

    })
}

module.exports.deleteModelitem = function (
    req: Request,
    res: Response
) {
    const id = req.params.id

    taskEntry.deleteOne({ _id: id }).exec((data) => {
        res.json(data)
        res.status(202);
    })
}