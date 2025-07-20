import { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useLocation } from 'react-router-dom';

function YourTodox() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);
  const [identity, setIdentity] = useState();
  const [showFinished, setShowFinished] = useState(false);
  const location = useLocation();
  const locationEmail = location.state?.email;

  // Get user info from email
  const fetchName = async (passedEmail) => {
    try {
      const res = await fetch(`http://localhost:3000/api/user/${passedEmail}`);
      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
      } else {
        setName(data.name);
        setIdentity(data._id);
         localStorage.setItem("name", data.name);
         localStorage.setItem("identity", data._id);
      }
    } catch (error) {
      console.error("Error fetching name:", error.message);
    }
  };

  // Get todos for that user
  const fetchData = async () => {
    if (!identity) return;
    try {
      const res = await fetch(`http://localhost:3000/api/todos/${identity}`);
      const data = await res.json();
      setTodos(data);
      console.log("✅ Name & ID updated in state fetch data :",data);
      if(!res.ok){
        alert(data.message)
      }
    } catch (error) {
      console.error("Error fetching todos:", error.message);
    }
  };

useEffect(() => {
  const storedName = localStorage.getItem("name");
  const storedId = localStorage.getItem("identity");

  if (storedName && storedId) {
    setName(storedName);
    setIdentity(storedId);
  } else if (locationEmail) {
    fetchName(locationEmail); 
  }
}, [locationEmail]);


  useEffect(() => {
    fetchData();
     console.log("✅ Name & ID updated in state effect:", name, identity);
  }, [identity]);

  const handleAdd = async () => {
    try {
      if (checkEmpty() && checkRepeat()) {
        let data = { name:name, userid: identity, todo: todo, isCompleted: false };
        let res;
         console.log("✅in handle add:", data);
        if (edit) {
          data._id = edit;
          res = await fetch(`http://localhost:3000/api/${edit}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
        } else {
          res = await fetch('http://localhost:3000/api', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
        }

        const result = await res.json();
        alert(result.message);
        setTodo("");
        setEdit(null);
        fetchData();
      } else {
        setTodo("");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const checkEmpty = () => {
    if (todo.trim() !== "") return true;
    alert("Todo cannot be empty");
    return false;
  };

  const checkRepeat = () => {
    const isRepeat = todos.some(item => item.todo.toLowerCase() === todo.toLowerCase());
    if (isRepeat) {
      alert("Todo already exists");
      return false;
    }
    return true;
  };

  const handleEdit = (id) => {
    const itemToEdit = todos.find(item => item._id === id);
    setTodo(itemToEdit.todo);
    setEdit(id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/api/${id}`, { method: "DELETE" });
      const result = await res.json();
      alert(result.message);
      fetchData();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCheckbox = async (e) => {
    const id = e.target.name;
    const newTodos = [...todos];
    const index = newTodos.findIndex(item => item._id === id);
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);

    try {
      const res = await fetch(`http://localhost:3000/api/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: newTodos[index].isCompleted })
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
    } catch (error) {
      alert("Failed to update todo status.");
    }
  };

  const toggleFinish = () => {
    setShowFinished(!showFinished);
  };

  const handleClear = async () => {
    if (todos.length === 0) {
      alert("Nothing to clear");
      return;
    }
    else{
      const confirmClear = window.confirm("Are you sure you want to clear all todos?");
    if (!confirmClear) return;

    try {
      const res = await fetch(`http://localhost:3000/api/clear/${identity}`, { method: "DELETE" });
      const result = await res.json();
      alert(result.message);
      fetchData();
    } catch (error) {
      alert(error.message);
    }
    }

    
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log("value entered in todo")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:bg-violet-200">
      <div className="md:container md:mx-auto my-1 md:my-5  min-h-[100vh] md:min-h-[80vh] md:w-1/2 bg-white p-5 rounded-lg md:shadow-lg  ">
        <div className="addTodo flex flex-col items-center justify-center text-indigo-800">
          <div className="flex flex-col items-center text-indigo-700">
            <h1 className="text-3xl font-bold font-serif mb-2 italic">Todox</h1>
            <p className="text-sm text-gray-500 mb-6">{name}'s Task Planner</p>
          </div>
          <div className='mb-4 w-full'>
            <h2 className='text-xl font-semibold text-start mx-2 text-indigo-800 mb-2'>Add a Todo</h2>
          </div>
          <div className="input flex flex-row items-center justify-center mx-6 mb-4 w-full gap-1">
            <input type="text" onChange={handleChange} value={todo} className='rounded-full border border-violet-600 w-full p-1' />
            <button onClick={handleAdd}  className='bg-violet-500 hover:bg-violet-600 py-1 px-2 text-white rounded-full text-s font-bold'>Save</button>
          </div>
        </div>
        <div className="finished mx-2 flex flex-row items-center justify-between">
          <div>
            <input onChange={toggleFinish} type="checkbox" checked={showFinished} /> <span className='text-indigo-800'>Show Finished?</span>
          </div>
          <button onClick={handleClear} className='text-indigo-600 hover:text-indigo-600 text-sm font-bold mx-2'>Clear All</button>
        </div>
        <div className='h-[1px] bg-violet-800 opacity-15 my-4'></div>
        <h2 className='text-xl font-semibold YourTodos my-3 mx-2 text-indigo-800 mb-2'>Your Todos</h2>

        {(todos.length === 0 || (todos.every(item => item.isCompleted) && !showFinished)) && (
          <div className='text-xl flex flex-col font-mono font-thin justify-center items-center text-indigo-800 italic h-auto'>
            <p>Wohoo!!! Nothing to do...</p>
          </div>
        )}

        <div className='flex flex-col'>
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && (
              <div key={item._id} className='todos flex flex-row justify-between items-center mx-4 my-1 w-auto px-3 py-2 rounded-md hover:shadow-md'>
                <div className="flex flex-row justify-center items-center gap-2 w-1/2">
                  <input type="checkbox" checked={item.isCompleted} name={item._id} onChange={handleCheckbox} />
                  <div className="overflow-auto w-full" style={{ scrollbarWidth: "none" }}>
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={() => handleEdit(item._id)} className='bg-violet-500 hover:bg-violet-600 py-1 px-2 text-white rounded-md text-sm font-bold'><FaEdit /></button>
                  <button onClick={() => handleDelete(item._id)} className='bg-violet-500 hover:bg-violet-600 py-1 px-2 text-white rounded-md text-sm font-bold'><AiFillDelete /></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YourTodox;
