// Task.js - Mongoose model for tasks
// Defines schema for task documents

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  title: { type: String, required: true }, // Title of the task
  description: { type: String }, // Description of the task
  completed: { type: Boolean, default: false }, // Status of the task, default is false
  createdAt: { type: Date, default: Date.now }, // Timestamp when the task was created
});

export default mongoose.model('Task', taskSchema);
