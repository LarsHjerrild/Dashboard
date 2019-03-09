import { Document } from "mongoose";
import { Task } from "./examplemodel";

export interface ITaskEntryDocument extends Task, Document {}