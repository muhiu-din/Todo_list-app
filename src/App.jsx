import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
     <div className="container mx-auto">
       <div className='bg-red-600'>
        <h1>Your Todos</h1>
      </div>
     </div>
    </>
  )
}

export default App
