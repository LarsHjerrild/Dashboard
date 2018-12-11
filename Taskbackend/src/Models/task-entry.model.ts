import { Document } from "mongoose";
import { Task } from "./examplemodel";

//TODO remove MyTask

export interface ITaskEntryDocument extends Task, Document {}