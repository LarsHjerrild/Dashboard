import { Schema } from 'mongoose'
import { CATEGORIES, PRIORITIES } from '../../Models/examplemodel'


export default new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  creation_date: Date,
  category: {
    enum: [
      'DEVELOPMENT',
      'RELATIONAL',
      'MUSIC',
      'ARTS',
      'SPORTS',
      'MAINTENANCE',
      'TRANSPORT',
      'LEARNING',
      'FOOD',
      'FUN']
  },
  priority: {
    enum: [
      'LOW',
      'MEDIUM',
      'HIGH',
      'CRITICAL'
    ]
  },
  due_date: Date,
  goal_origin: String,
  time_estimate: Number
});