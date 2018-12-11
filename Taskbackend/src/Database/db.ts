import { connect, connection, model } from "mongoose";
//TODO inhere
import { ITaskEntryDocument } from "../Models/task-entry.model";
import taskEntrySchema from "./Schemas/task-entry-schema";

const dbURI :any = process.env.TASK_MONGODB_URI;

connect(
  dbURI,
  { useNewUrlParser: true }
);

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", arg => {
  console.log("Connected to database");
});

// Initialize different mongoose schemas
model<ITaskEntryDocument>("taskEntry", taskEntrySchema);