import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setname] = useState("")
    const navigate = useNavigate()
    const saveData = async () => {
      try{
        let data = {email:email ,name : name }
       let res = await fetch('http://localhost:3000/signup',
    {method: "POST",headers:{"Content-Type": "application/json"},
    body:JSON.stringify(data)})
     let result = await res.json()
       if(!res.ok){
         alert(result.message)
       }
       else{
        alert(result.message)
       }
      }catch(error){
        alert(error.message)
      }
    }
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await saveData()
      alert("Signup successful");
        navigate('/Todo_list-app')
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-200 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold font-serif italic text-center text-indigo-700 mb-1">Todox</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Create your account</p>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm text-indigo-700 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
                onChange={(e) => setname(e.target.value)}
              className="w-full px-3 py-2 border border-violet-500 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-indigo-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-violet-500 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-indigo-700 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-violet-500 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-full font-semibold transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/Todo_list-app" className="text-violet-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
