import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setShowFinished] = useState(false)
  const saveToLocalStorage = (newTodo) => {
     localStorage.setItem("todos", JSON.stringify(newTodo));
   }
   useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if(todoString){
    let savedTodos = JSON.parse(localStorage.getItem("todos"));
    settodos(savedTodos);
    }
    
  }, [])
  
  const handleAdd = () =>  {
    if (checkEmpty() && checkRepeat()) {
    settodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    settodo("")
    let newTodos = [...todos,{id:uuidv4(),todo,isCompleted:false}];
    saveToLocalStorage(newTodos);
  }
  else {
    settodo("");
    return;
  }
   
}
const checkEmpty = () => {
  if(todo != ""){
    return true;
  }
  else {
    alert("Todo cannot be empty");
    return false;
  }
}
  const checkRepeat = () => {
  let isRepeat = todos.some(item => item.todo.toLowerCase() === todo.toLowerCase());
  if (isRepeat) {
    alert("Todo already exists");
    return false;
  }
  return true;
}
  const handleEdit = (e,id) => {
    let foundTodo = todos.find(item => item.id === id)
    settodo(foundTodo.todo);
    let newTodos = todos.filter(item => item.id !== id);
    settodos(newTodos);
    saveToLocalStorage(newTodos);
  }
  const handleDelete = (e,id) => {
   let confirmDelete = window.confirm("Are you sure you want to delete this todo?");
   if(confirmDelete){
     let newTodos = todos.filter(item => item.id !== id);
    settodos(newTodos);
    saveToLocalStorage(newTodos);
   }
   else{
    return;
   }
    
  }
  const handleChange = (e) => {
    settodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item =>{
      return item.id == id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    saveToLocalStorage(newTodos);
  }
  const toggleFinish = (e) => {
    setShowFinished(!showFinished);
  }
   
   
  

  return (
    <>
      <Navbar />
     <div className="md:container md:mx-auto my-1 md:my-5 min-h-[100vh] bg-violet-200 p-5 rounded-lg shadow-lg md:min-h-[80vh] md:w-1/2"> 
       <div className="addTodo flex flex-col items-center justify-center text-violet-600 ">
        <h1 className='text-2xl md:text-xl md:font-bold font-extrabold text-violet-800 font-serif mb-6 italic underline'>Todox-Your Task Planner</h1>
       <div className='mb-4 w-full'>
        <h2 className='text-lg font-bold text-start mx-2 text-start'>Add a Todo</h2>
       </div>
       <div className="input flex flex-row items-center justify-center mx-6 mb-4 w-full gap-1">
        <input type="text" onChange={handleChange} value={todo} className='rounded-full border border-1 border-violet-600 w-full p-1'/>
       <button onClick={handleAdd} className='bg-violet-500 hover:bg-violet-600 py-1 px-2 text-white rounded-full text-s font-bold '>Save</button>
       </div>
      </div>
       <div className="finished mx-2">
        <input onChange={toggleFinish} type="checkbox" checked={showFinished}  /> <span className='text-violet-600'>Show Finished?</span>
      </div>
      <div className='h-[1px] bg-violet-800 opacity-15 my-4'></div>
      <h2 className='text-lg font-bold YourTodos  my-3 mx-2  text-violet-600'>Your Todos</h2>
     
      {((todos.every(item => item.isCompleted) && !showFinished) || todos.length === 0)  && <div className='text-xl flex flex-col font-mono font-thin justify-center items-center text-violet-500 italic h-auto '><p>Wohoo!!!Nothing to do...</p></div>}
    <div className='flex flex-col'>
        {todos.map(item => {
        return (showFinished || !item.isCompleted) && <div key={item.id} className='todos flex flex-row justify-between items-center mx-4 my-1 w-auto  px-3 py-2 rounded-md hover:shadow-md'>
          <div className="flex flex-row justify-center items-center gap-2 w-1/2 ">
            <div className="checkbox">
              <input type="checkbox" checked={item.isCompleted} name={item.id} onChange={handleCheckbox} id="" />
            </div>
      <div className="overflow-auto w-full" style={{scrollbarWidth: "none"}}>
         <div className={item.isCompleted?"line-through ":""} >
        {item.todo}
       </div>
      </div>
          </div>
       <div className="buttons flex gap-2">
    <button onClick={(e) => {handleEdit(e,item.id)}} className='bg-violet-500 hover:bg-violet-600 py-1 px-2 text-white rounded-md text-sm font-bold ' ><FaEdit />
</button>
    <button onClick={(e) => {handleDelete(e,item.id)}} className='bg-violet-500 hover:bg-violet-600 py-1 px-2 text-white rounded-md text-sm font-bold '><AiFillDelete /></button>
       </div>
      </div>
      })}
    </div>
      
     </div>
    </>
  )
}

export default App
