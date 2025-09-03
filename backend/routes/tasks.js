// tasks.js - Task CRUD routes
// Handles create, read, update, delete for tasks
import express from 'express';
import auth from '../middleware/auth.js';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

// Get all tasks for logged-in user
router.get('/', auth, getTasks);

// Add new task
router.post('/', auth, addTask);

// Update task
router.put('/:id', auth, updateTask);

// Delete task
router.delete('/:id', auth, deleteTask);

export default router;
