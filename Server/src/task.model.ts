import { Schema, Document, model } from 'mongoose';

interface ITask extends Document{
  description: string,
  status: string
};

const taskSchema = new Schema<ITask>({
  description: { type: String, required: true },
  status: { type: String, required: true }
});

const Task = model<ITask>('Task', taskSchema);

export default Task;