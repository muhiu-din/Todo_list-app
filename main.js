import express, { json } from 'express'
import cors from 'cors';

import {Todo} from './models/Todo.js'
import { User } from './models/Users.js';
const app = express()
const port = 3000
import mongoose from 'mongoose';
await mongoose.connect('mongodb://localhost:27017/todoapp');
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.get('/api/user/:email', async (req, res) => {
 try{
   let {email} = req.params
  let data = await User.findOne({email}) 
  res.json(data)
 }catch(error){
  res.status(500).json({message:error.message})
 }
})
app.get('/api/todos/:identity', async (req, res) => {
  try{
    let data = await Todo.find({userid: req.params.identity}) 
  res.json(data)
  }catch (err) {
    res.status(500).json({ message: "Error fetching todos", error: err.message });
  }
})
app.put(`/api/:edit`, async (req, res) => {
  try{
    let {edit} = req.params
  let data = await Todo.findByIdAndUpdate(edit,{$set:req.body},{new:true}) 
    res.status(200).json({message:"Updated Successfully"})
  }catch(error){
    res.status(500).json(error.message)
  }
})
app.post('/signup', async (req, res) => {
  try{
  let signup = new User(req.body)
  await signup.save()
  res.status(200).json({ message: "Signup saved" }); 
  }catch(error){
    res.status(500).json(error.message)
  }
})
app.delete(`/api/:id`, async (req, res) => {
  try{
    let {id} = req.params
  let data = await Todo.findByIdAndDelete(id) 
    res.status(200).json({message:"Deleted Successfully"})
  }catch(error){
    res.status(500).json(error.message)
  }
})
app.delete('/api/clear/:identity', async (req, res) => {
  try{
  let data = await Todo.deleteMany({userid: req.params.identity}) 
    res.status(200).json({message:"Cleared Successfully"})
  }catch(error){
    res.status(500).json(error.message)
  }
})
app.post('/api', async (req, res) => {
  try{
    const todo = new Todo(req.body)
    await todo.save()
    res.status(200).json({message:"Todo Saved successfully"})
    console.log(req.body)
  }catch(error){
    res.status(500).json({error:error.message})
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
