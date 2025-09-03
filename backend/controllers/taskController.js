// taskController.js - Handles task CRUD logic
import Task from '../models/Task.js';

// Get all tasks for logged-in user
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Add new task
export const addTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const task = new Task({
      userId: req.userId,
      title,
      description,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// Update task
export const updateTask = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, description, completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
