import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-4 text-white flex justify-between items-center'>
    <div className="logo">
        <h1 className='text-2xl font-bold'>Todo App</h1>
    </div>
    <ul className='flex gap-4'>
        <li>Home</li>
        <li>Your Tasks</li>
        <li>More</li>
    </ul>
    </nav>
  )
}

export default Navbar
