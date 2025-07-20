import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: String,
  userid: String,          
  todo: String,
  isCompleted: Boolean
});

export const Todo = mongoose.model('Todo', todoSchema);
