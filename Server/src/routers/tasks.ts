import ICreateTaskDto from '../dtos/createTaskDto.js';
import Task from '../task.model.js';
import express, { Express, Router, Request, Response } from 'express';
import mongoose from 'mongoose';

enum Status {
  Todo,
  InProgress,
  Done
}

//in the module, we work with a `router` object
const router = express.Router();

//Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

//Get a specific task
router.get('/:id', async (req, res) => {
  const taskId = new mongoose.Types.ObjectId(req.params.id);
  const task =  await Task.findById(taskId);
  res.send(task);
});

//Get all tasks
router.post('/', async (req: Request, res) => {
  const { description } = req.body as ICreateTaskDto;
  const task = new Task({
    description: description,
    status: Status[Status.Todo]
  });
  await task.save();

  res.send(task);
});

//Update a specific task
router.patch('/:id', async (req, res) => {
  const taskId = new mongoose.Types.ObjectId(req.params.id);
  const body = req.body as ICreateTaskDto;

  const task = await Task.updateOne({ _id: taskId },
  {
    $set: body
  });
  res.send(task);
});

//Delete a specific task
router.delete('/all', async (req, res) => {
  const tasks = await Task.deleteMany({});
  res.send(tasks);
});

//Delete a specific task
router.delete('/:id', async (req, res) => {
  const taskId = new mongoose.Types.ObjectId(req.params.id);
  const task = await Task.deleteOne({_id: taskId});
  res.send(task);
});

export default router;