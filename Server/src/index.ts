import express, { Express } from 'express';
import mongoose from 'mongoose';
import tasksRouter from './routers/tasks.js';
import databaseUri from './database.js';

mongoose.connect(databaseUri)
  .then(() => console.log(`Connected to MongoDB (${databaseUri})...`))
  .catch(err => console.error(`Could not connect to MongoDB (${databaseUri})...`, err));

const LISTENING_PORT = 3000;

//load the Express module
const app: Express = express();

//adding a middleware to be able to parse JSON in the body
app.use(express.json());

//using routes
app.use('/api/tasks', tasksRouter);

app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));
